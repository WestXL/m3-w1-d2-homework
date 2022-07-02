new Vue({
    el: '#photos',
    data: {
        source: "/images/chili.jpg"
    }
});

new Vue({
    el: '#navbar',
    data: {
        nav: '<nav class="navbar navbar-expand-lg sticky-top py-1 mt-4"> \
                <a class="navbar-brand mx-auto" \
                   href="#"> \
                    <div id="component1" \
                         class="ml-5"> \
                        <mycomponent1> </mycomponent1> \
                    </div> \
                </a> \
                <button class="navbar-toggler" \
                        type="button" \
                        data-toggle="collapse" \
                        data-target="#navbarNav" \
                        aria-controls="navbarNav" \
                        aria-expanded="false" \
                        aria-label="Toggle navigation"> \
                    <span class="fa fa-bars"></span> \
                </button> \
                <div class="collapse navbar-collapse" \
                     id="navbarNav"> \
                    <ul class="navbar-nav nav-fill w-100 text-uppercase"> \
                        <li class="nav-item"> \
                            <a class="nav-link" \
                               href="#">Home<span class="sr-only">(current)</span></a> \
                        </li> \
                        <li class="nav-item"> \
                            <a class="nav-link" \
                               href="#">Recipes</a> \
                        </li> \
                        <li class="nav-item "> \
                            <a class="nav-link" \
                               href="#">Lifestyles</a> \
                        </li> \
                        <li class="nav-item"> \
                            <a class="nav-link">Videos</a> \
                        </li> \
                        <li class="nav-item"> \
                            <a class="nav-link">About</a> \
                        </li> \
                    </ul> \
                </div> \
            </nav>'
    }
});

Vue.component('mycomponent1', {
    template: '<span>Food Blog</span>'
});
Vue.component('mycomponent2', {
    template: '<h2>Comments</h2>'
});
new Vue({
    el: '#component1'
});
new Vue({
    el: '#component2'
});
new Vue({
    el: '#blogposts',
    data: {
        comments: [{
            profile: '/images/profile.png',
            name: 'Brianna',
            time: 'February 18, 2021 @ 3:30 pm',
            commentType: 'REPLY',
            comment: '<p>Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!</p>',
            FoodieLevel: 'Novice',
            Bio: 'Food enthusiast. Love to cook and experiment.Into only organic, fat free, sugar free stuffs!',
            show: true,
        }, {
            profile: '/images/profile.png',
            name: 'LINH',
            time: 'February 15, 2021 @ 9:46 am',
            commentType: 'REPLY',
            comment: '<p>I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!</p>',
            FoodieLevel: 'Newcomer',
            Bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.',
            show: true,
        }, {
            profile: '/images/profile.png',
            name: 'CATHERINE LEONARDO',
            time: 'February 13, 2021 @ 12:58 pm',
            commentType: 'REPLY',
            comment: '<p>I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.</p>',
            FoodieLevel: 'Mentor',
            Bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!',
            show: true,
        }, {
            profile: '/images/profile.png',
            name: 'KALI',
            time: 'February 13, 2021 @ 11:31 am',
            commentType: 'REPLY',
            comment: '<p>his recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!</p>',
            FoodieLevel: 'Novice',
            Bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!",
            show: true,
        }]
    },
    methods: {
        showProfile: function (index) {
            console.log(this.comments[index].comment);
            var name = this.comments[index].name;
            var level = this.comments[index].FoodieLevel;
            var bio = this.comments[index].Bio;
            modalOn(name, level, bio);
        }
    },
});

function modalOn(name, level, bio) {
    document.getElementById("disBtn").click();
    document.getElementById("exampleModalLongTitle").innerHTML = "<h4>" + name + "</h4>";
    document.getElementById("text").innerHTML = "<p><b>Foodie Level: </b>" + level + "</p>" + "<p><b>Bio: </b>" + bio + "</p>";
}

function modalOff() {
    document.getElementById("overlay").style.display = "none";
}