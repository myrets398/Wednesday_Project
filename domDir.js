angular.module("Wednesday_Project").directive("domDir",
    function($document) {
        var link = function(scope, element) {
            scope.name = "Cars";
            // code from w3schools
            var startX = 0;
            var startY = 0;
            var x = 0;
            var y = 0;
            element.css({
                position: 'relative',
                border: '1px solid red',
                backgroundColor: 'lightgray',
                cursor: 'pointer'
            });
            // code for moving box
            element.on('mousedown', function(event) {
                event.preventDefault();
                startX = event.pageX - x;
                startY = event.pageY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });

            function mousemove(event) {
                y = event.pageY - startY;
                x = event.pageX - startX;
                element.css({
                    top: y + 'px',
                    left: x + 'px'
                });
            };

            function mouseup() {
                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
            }
        };
        return {
            template: 'Hello{{person}}',
            restrict: "E",
            link: link,
        }

    })
