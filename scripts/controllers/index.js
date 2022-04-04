
angular.module('azbookaApp')
    .controller('MainCtrl', function($scope, $location, $anchorScroll, $timeout) {

        $scope.isActive = false;
        $scope.activeButton = function() {
            $scope.isActive = !$scope.isActive;
        }
        $scope.goTo = function(idElement) {
            $timeout(function() {
                $location.hash(idElement);
                $anchorScroll();
            });
        }

        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

$(document).mouseup(function(e) {

    let container = $("#YOUR_TARGETED_ELEMENT_ID");

    if (!container.is(e.target) && container.has(e.target).length === 0) {

        container.fadeOut();

    }
});

// Smooth scroll
$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
});



function sendEmail() {
    let form = document.querySelector('form.gform');
    let elements = form.elements;

    let fields = Object.keys(elements).filter(function(k) {
        return (elements[k].name !== "honeypot");
    }).map(function(k) {
        if (elements[k].name !== undefined) {
            return elements[k].name;
            // special case for Edge's html collection
        } else if (elements[k].length > 0) {
            return elements[k].item(0).name;
        }
    }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
    });

    let formData = {};
    fields.forEach(function(name) {
        let element = elements[name];

        // singular form elements just have one value
        formData[name] = element.value;

        // when our element has multiple items, get their values
        if (element.length) {
            let data = [];
            for (let i = 0; i < element.length; i++) {
                let item = element.item(i);
                if (item.checked || item.selected) {
                    data.push(item.value);
                }
            }
            formData[name] = data.join(', ');
        }
    });
    let result = '';
    for (let value in formData) {
        result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + value + "</h4><div>" + formData[value] + "</div>";
    }
    Email.send({
        Host: "smtp.yandex.ru",
        Port: 587,
        Username: "bug@idesk.su",
        Password: ".6XR5t$K5s9creZ",
        To: 'jetquery@yandex.ru',
        From: "bug@idesk.su",
        Subject: "Сообщение с сайта azbooka.ru",
        Body: result
    }).then(
        document.querySelector('.thankyou__message').style.animation = 'thankyou-animation 5s linear'
    );
}
