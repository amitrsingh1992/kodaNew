/**
 * @ngdoc module
 * @name koda
 * @description
 *   this module contain ui-router and ngDraggable dependencies
 */
var app = angular.module("koda",["ui.router",'ngDraggable']);
/** configure existing services */
/**
 * @ngdoc method
 * @name config
 * @description
 *   defines state routes by defining different states for each different views
 */

app.config(function($stateProvider,$urlRouterProvider) {

$urlRouterProvider.otherwise('login');
$stateProvider
.state("login", {
   url: '/login',
    templateUrl : './templates/login.html',
    controller: 'loginController'
})
.state('welcomeUser',{
  url:'/welcomeUser',
  templateUrl : './templates/welcomeUser.html',
  controller: 'welcomeUserCtrl'
})
.state("welcome", {
   url: '/welcome',
    templateUrl : './templates/junglepage.html',
    controller: 'junglepageCtrl'
})
.state("helpLion", {
   url: '/helpLion',
    templateUrl : './templates/helpLion.html',
    controller: 'helpLionCtrl'
})
    .state("learndance", {
       url: '/learndance',
        templateUrl : './templates/dancinganimals.html',
        controller: 'dancinganimalsController'
    })

    .state("flipbook", {
       url: '/flipbook',
        templateUrl : './templates/flipbook.html',
        controller: 'flipbookController'
    })
    .state("stepShown", {
       url: '/stepShown',
        templateUrl : './templates/stepShown.html',
        controller: 'stepShownCtrl'
    })
    .state("wrongMoves", {
       url: '/wrongMoves',
        templateUrl : './templates/wrongMoves.html',
        controller: 'wrongMovesCtrl'
    })
    .state("flipeffect", {
       url: '/flipeffect',
        templateUrl : './templates/flipbookeffect.html',
        controller: 'flipeffectCtrl'
    })
    .state("fulldance", {
       url: '/fulldance',
        templateUrl : './templates/fulldance.html',
        controller: 'fulldanceController'
    })
    .state("thankyou", {
       url: '/thankyou',
        templateUrl : './templates/thankyouPage.html',
        controller: 'thankyouPageCtrl'
    })
    .state("ninjaBadge", {
       url: '/ninjaBadge',
        templateUrl : './templates/ninjaBadge.html',
        controller: 'ninjaBadgeCtrl'
    })
    .state("animationExplain", {
       url: '/animationExplain',
        templateUrl : './templates/animationExplain.html',
        controller: 'animationExplainCtrl'
    })
    .state("chartypes", {
     url: '/chartypes',
      templateUrl : './templates/chartypes.html',
      controller: 'charTypesController'
  })
  .state("chartypesCont", {
     url: '/chartypesCont',
      templateUrl : './templates/chartypesCont.html',
      controller: 'charTypesController'
  })
  .state("selectingCharacter", {
     url: '/selectchar',
      templateUrl : './templates/selectchar.html',
      controller: 'selectcharController'
  })
  .state("algorithm", {
     url: '/algorithm',
      templateUrl : './templates/algorithm.html',
      controller: 'algorithmCtrl'
  })
  .state("giraffeGameIntro", {
     url: '/giraffeGameIntro',
      templateUrl : './templates/giraffeGameIntro.html',
      controller: 'giraffeGameIntroCtrl'
  });
});
