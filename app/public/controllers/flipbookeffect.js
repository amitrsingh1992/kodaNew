app.controller('flipeffectCtrl', function($scope) {
    $scope.isclicked = false;
    $(document).ready(function() {
        $('#pause').hide();
        $('#mybook').booklet({
            width: 500,
            height: 250,
            closed: true,
            delay: 250,
            speed: 80,
            auto: true,
            pause: '#pause',
            play: '#playButton',
            pageNumbers: false

        })
        setTimeout(function() {
            $('#pause').click();
        }, 1450);
        $("#playButton").on("click", function() {
            setTimeout(function() {
                $('#pause').click();
            }, 1800);
        });

    });

    $scope.play = function() {
        $('#mybook').booklet({
            width: 500,
            height: 250,
            closed: true,
            delay: 250,
            speed: 80,
            auto: true,
            pause: '#pause',
            play: '#playButton',
            pageNumbers: false

        })
        setTimeout(function() {
            $('#pause').click();
        }, 1450);

    }

})
