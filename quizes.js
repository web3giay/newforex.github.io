/*! ECB-quizes - European Central Bank */

var QUIZ = window.QUIZ || {};
QUIZ.quiz = (function () {
    var isInitialized = false;
    var quizes = [];

    var init = function(){
        if(!isInitialized){
            //detect if quiz is needed            
            $('.ecb-quiz').each(function(){
                $(this).find(".quiz-button-wrapper").css("visibility", "hidden");
                quizes.push({"quiz":$(this),score:0});
                if($('.ecb-quiz-result#'+ECB.helpers.parseUrlParams().hash).length==0){                
                    $(this).addClass('ecb-quiz-start');      
                    //$(this).removeClass('hidden');                                        
                }
                hookControls(quizes[quizes.length-1]);           
            }); 
        }
        
        isInitialized = true;
    }

    var resetQuizes = function(){        
        if(window.location.hash==''){
            $.each(quizes,function(i,quizObject){
                quizObject.score=0;
                var quiz = $(quizObject.quiz);
                quiz.find('.ecb-question-possible-answer input[type="radio"]').removeAttr('disabled');
                quiz.find('.ecb-quiz-question').removeClass('active').removeClass('answered-correct').removeClass('answered-wrong').first().addClass('active');
                quiz.find('.ecb-question-possible-answer input:checked').prop('checked', false);
                quiz.addClass('ecb-quiz-start');
            });
        }        
    }
    
    window.addEventListener('pushState',resetQuizes);
 

    var hookControls = function(quizObject){    
        var quiz = quizObject.quiz;        
        quiz.find('.ecb-quiz-nextButton').click(function(){            
            $(this).closest(".ecb-quiz").find(".quiz-button-wrapper").css("visibility", "hidden");

            var nextQuestion = quiz.find('.ecb-quiz-question.active').removeClass('active').next().addClass('active');            
            if(nextQuestion.length==0){                
                quiz.removeClass('ecb-quiz-start');
                quiz.find('.ecb-quiz-result').each(function(){
                    if(                         
                        quizObject.score <= +$(this).attr('data-max-correct')){
                            offsetTop = $(window).scrollTop();
                            window.location.hash = '#'+$(this).attr('id');
                            $(window).scrollTop(offsetTop);
                            return false;
                    }
                    
                });
            } 
            quiz.removeClass('ecb-quiz-check'); 
            if(ECB.currentBreakpoint=='smartphone-portrait'){
                //jump to the top
                $(document).scrollTop($('main').offset().top);
            }
        });

        quiz.find('.ecb-question-possible-answer input').change(function(){
            $(this).closest(".ecb-quiz").find(".quiz-button-wrapper").css("visibility", "visible");
        });

        quiz.find('.ecb-quiz-checkAnswerButton').click(function(){            
            quiz.addClass('ecb-quiz-check');
            quiz.find('.ecb-quiz-question.active input').attr('disabled','true');
            if(quiz.find('.ecb-quiz-question.active input:checked[data-correct]').length){
                quiz.find('.ecb-quiz-question.active').addClass('answered-correct');
                quizObject.score++;
            }else{
                quiz.find('.ecb-quiz-question.active').addClass('answered-wrong');
            }
        }); 
    }
    return {
        'init':init
    }
})();
var QUIZ = window.QUIZ || {};

/*
** Quizes
** -------------------------------------------- */
var ECB = window.ECB || {};
ECB.componentList = ECB.componentList || [];

{	
	// Add all components to componentList
	ECB.componentList = ECB.componentList.concat([
		QUIZ.quiz
	]);
}


