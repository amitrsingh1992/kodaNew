app.controller('wrongMovesCtrl',function($scope){

  $scope.showModal = false;
     $scope.buttonClicked = "";
     $scope.toggleModal = function(btnClicked){
         $scope.buttonClicked = btnClicked;
         $scope.showModal = !$scope.showModal;
     };

});

$(document).ready(function () {
    setTimeout(function () {
      $("#pointing").show(1000);
    },2000);
    setTimeout(function () {
      $("#leftPoint").show(1000);
    },4000);
  });

      function allowDrop(ev) {
          ev.preventDefault();
      }

      function drag(ev) {
          ev.dataTransfer.setData("text", ev.target.id);
      }

      function drop(ev) {
              ev.preventDefault();
              var data = ev.dataTransfer.getData("text");
              if($(ev.target).hasClass('drop')){
                        ev.target.appendChild(document.getElementById(data));
              }
              else{
                    alert("already having content");
              }
            }
      function drop1(ev) {
                ev.preventDefault();
                var data = ev.dataTransfer.getData("text");
                if($(ev.target).hasClass('lionImgBorder')){
                    ev.target.appendChild(document.getElementById(data));
                }
                else{
                  alert("already having content");
                }
              }
