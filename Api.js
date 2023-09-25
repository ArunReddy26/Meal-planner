
var b = document.getElementById("formbutton");
var result = "";
var result1 = "";
var result2 = "";

b.addEventListener('click', () => {

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = document.getElementById('activity').value;




    var bmr;
    if (gender === 'female') {
        bmr = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    }
    else if (gender === 'male') {
        bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    }


    var dailyCalories;

    if (activityLevel === 'light') {
        dailyCalories = bmr * 1.375;
    }
    else if (activityLevel === 'moderate') {
        dailyCalories = bmr * 1.55;
    }
    else if (activityLevel === 'active') {
        dailyCalories = bmr * 1.725;
    }
    else {
        dailyCalories = bmr;
    }

    dailyCalories = parseInt(dailyCalories);


    async function Arun() {
        const response = await fetch("https://content.newtonschool.co/v1/pr/64995a40e889f331d43f70ae/categories");
        const response1 = await response.json();
        data1 = "";
        data2 = "";
        data3 = "";
        response1.forEach((output) => {


            if (dailyCalories >= output.min && dailyCalories <= output.max) {
                result = output.breakfast.title;
                result1 = output.lunch.title;
                result2 = output.dinner.title;



                data1 = `<div>
            <h1>BREAKFAST</h1>
            <img src=${output.breakfast.image}">
            <h2>${output.breakfast.title}</h2>
            <p>Calories :- ${dailyCalories}</p>
            <button onclick="recipebtn()">GET RECIPE</button>
        </div>`

                data2 = `<div>
                <h1>LUNCH</h1>
                <img src=${output.lunch.image}>
                <h2>${output.lunch.title}</h2>
                <p>Calories :- ${dailyCalories}</p>
                <button onclick="recipebtn1()">GET RECIPE</button>
            </div>`

                data3 = `<div>
                <h1>DINNER
                </h1>
                <img src=${output.dinner.image}">
                <h2>${output.dinner.title}</h2>
                <p>Calories :- ${dailyCalories}</p>
                <button onclick="recipebtn2()">GET RECIPE</button>
            </div>`



                document.getElementById("card1").innerHTML = data1;
                document.getElementById("card2").innerHTML = data2;
                document.getElementById("card3").innerHTML = data3;


            }
            else if (dailyCalories >= output.min && dailyCalories <= output.max) {
                result = output.breakfast.title;
                result1 = output.lunch.title;
                result2 = output.dinner.title;


                data1 = `<div>
            <h1>BREAKFAST</h1>
            <img src=${output.breakfast.image}>
            <h2>${output.breakfast.title}</h2>
            <p>Calories :- ${dailyCalories}</p>
            <button onclick="recipebtn()">GET RECIPE</button>
        </div>`

                data2 = `<div>
                <h1>LUNCH</h1>
                <img src=${output.lunch.image}>
                <h2>${output.lunch.title}</h2>
                <p>Calories :- ${dailyCalories}</p>
                <button onclick="recipebtn1()">GET RECIPE</button>
            </div>`

                data3 = `<div>
                <h1>DINNER</h1>
                <img src=${output.dinner.image}>
                <h2>${output.dinner.title}</h2>
                <p>Calories :- ${dailyCalories}</p>
                <button onclick="recipebtn2()">GET RECIPE</button>
            </div>`


                document.getElementById("card1").innerHTML = data1;
                document.getElementById("card2").innerHTML = data2;
                document.getElementById("card3").innerHTML = data3;

            }

            else if (dailyCalories >= output.min && dailyCalories <= output.max) {
                result = output.breakfast.title;
                result1 = output.lunch.title;
                result2 = output.dinner.title;

                data1 = `<div>
            <h1>BREAKFAST</h1>
            <img src=${output.breakfast.image}>
            <h2>${output.breakfast.title}</h2>
            <p>Calories :- ${dailyCalories}</p>
            <button onclick="recipebtn()">GET RECIPE</button>
        </div>`

                data2 = `<div>
                <h1>LUNCH</h1>
                <img src=${output.lunch.image}>
                <h2>${output.lunch.title}</h2>
                <p>Calories :- ${dailyCalories}</p>
                <button  onclick="recipebtn1()">GET RECIPE</button>
            </div>`


                data3 = `<div>
                <h1>LUNCH</h1>
                <img src=${output.dinner.image}>
                <h2>${output.dinner.title}</h2>
                <p>Calories :- ${dailyCalories}</p>
                <button  onclick="recipebtn2()">GET RECIPE</button>
            </div>`




                document.getElementById("card1").innerHTML = data1;
                document.getElementById("card2").innerHTML = data2;
                document.getElementById("card3").innerHTML = data3;


            }



        });

    }
    Arun();


    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('age').value = '';


});

var ul = document.getElementById("first-ul");
var ol = document.getElementById("second-ol");

function recipebtn() {
    async function Recipe() {
        const res = await fetch("https://content.newtonschool.co/v1/pr/64996337e889f331d43f70ba/recipes");
        const res1 = await res.json();


        var array = [];
        if (res1[0].title == result) {
            array = res1[0].ingredients.split(",");

        }

        else if (res1[1].title == result) {
            array = res1[1].ingredients.split(",");

        }
        else if (res1[2].title == result) {
            array = res1[2].ingredients.split(",");

        }
        else if (res1[3].title == result) {
            array = res1[3].ingredients.split(",");

        }
        else if (res1[4].title == result) {
            array = res1[4].ingredients.split(",");

        }
        else if (res1[5].title == result) {
            array = res1[5].ingredients.split(",");

        }
        else if (res1[6].title == result) {
            array = res1[6].ingredients.split(",");

        }
        else if (res1[7].title == result) {
            array = res1[7].ingredients.split(",");

        }
        else if (res1[8].title == result) {
            array = res1[8].ingredients.split(",");

        }
        document.getElementById("quotation").innerHTML="";
        document.getElementById("quotation1").innerHTML="";

        ul.innerHTML = "";


        array.forEach((value) => {
            var li = document.createElement("li");
            li.innerText = value;
            ul.append(li);

        })

        var array2 = [];


        if (res1[0].title === result) {
            array2 = res1[0].steps.split(".");

        }
        else if (res1[1].title === result) {
            array2 = res1[1].steps.split(".");
            array2.pop();

        }
        else if (res1[2].title === result) {
            array2 = res1[2].steps.split(".");
            array2.pop();

        }
        else if (res1[3].title === result) {
            array2 = res1[3].steps.split(".");
            array2.pop();

        }
        else if (res1[4].title === result) {
            array2 = res1[4].steps.split(".");
            array2.pop();

        }
        else if (res1[5].title === result) {
            array2 = res1[5].steps.split(".");
            array2.pop();

        }
        else if (res1[6].title === result) {
            array2 = res1[6].steps.split(".");
            array2.pop();

        }
        else if (res1[7].title === result) {
            array2 = res1[7].steps.split(".");
            array2.pop();

        }
        else if (res1[8].title === result) {
            array2 = res1[8].steps.split(".");
            array2.pop();

        }

        ol.innerHTML = "";
        array2.forEach((value) => {
            var li = document.createElement("li");
            li.innerText = value;
            ol.append(li);


        })

    }
    Recipe();
}


function recipebtn1() {
    async function Recipe1() {
        const api = await fetch("https://content.newtonschool.co/v1/pr/64996337e889f331d43f70ba/recipes");
        const api1 = await api.json();
        var array3 = [];
        if (api1[0].title === result1) {
            array3 = api1[0].ingredients.split(",");
        }
        else if (api1[1].title === result1) {
            array3 = api1[1].ingredients.split(",");

        }
        else if (api1[2].title === result1) {
            array3 = api1[2].ingredients.split(",");
        }
        else if (api1[3].title === result1) {
            array3 = api1[3].ingredients.split(",");

        }
        else if (api1[4].title === result1) {
            array3 = api1[4].ingredients.split(",");
        }
        else if (api1[5].title === result1) {
            array3 = api1[5].ingredients.split(",");

        }
        else if (api1[6].title === result1) {
            array3 = api1[6].ingredients.split(",");
        }
        else if (api1[7].title === result1) {
            array3 = api1[7].ingredients.split(",");

        }
        else if (api1[8].title === result1) {
            array3 = api1[8].ingredients.split(",");
        }
        document.getElementById("quotation").innerHTML="";
        document.getElementById("quotation1").innerHTML="";
        ul.innerHTML = "";
        array3.forEach((value2) => {
            var li = document.createElement("li");
            li.innerText = value2;
            ul.append(li);

        })


        var array4 = [];
        if (api1[0].title === result1) {
            array4 = api1[0].steps.split(".");
        }
        else if (api1[1].title === result1) {
            array4 = api1[1].steps.split(".");
            array4.pop();

        }
        else if (api1[2].title === result1) {
            array4 = api1[2].steps.split(".");
            array4.pop();
        }
        else if (api1[3].title === result1) {
            array4 = api1[3].steps.split(".");
            array4.pop();

        }
        else if (api1[4].title === result1) {
            array4 = api1[4].steps.split(".");
            array4.pop();
        }
        else if (api1[5].title === result1) {
            array4 = api1[5].steps.split(".");
            array4.pop();

        }
        else if (api1[6].title === result1) {
            array4 = api1[6].steps.split(".");
            array4.pop();
        }
        else if (api1[7].title === result1) {
            array4 = api1[7].steps.split(".");
            array4.pop();

        }
        else if (api1[8].title === result1) {
            array4 = api1[8].steps.split(".");
            array4.pop();
        }
        
        ol.innerHTML = "";

        array4.forEach((value2) => {
            var li = document.createElement("li");
            li.innerText = value2;
            ol.append(li);


        })



    }
    Recipe1();

}


function recipebtn2() {
    async function Recipe2() {
        const thirdapi = await fetch("https://content.newtonschool.co/v1/pr/64996337e889f331d43f70ba/recipes");
        const last = await thirdapi.json();
        var array5 = [];
        if (last[0].title === result2) {
            array5 = last[0].ingredients.split(",");
        }
        else if (last[1].title === result2) {
            array5 = last[1].ingredients.split(",");

        }
        else if (last[2].title === result2) {
            array5 = last[2].ingredients.split(",");
        }
        else if (last[3].title === result2) {
            array5 = last[3].ingredients.split(",");

        }
        else if (last[4].title === result2) {
            array5 = last[4].ingredients.split(",");
        }
        else if (last[5].title === result2) {
            array5 = last[5].ingredients.split(",");

        }
        else if (last[6].title === result2) {
            array5 = api1[6].ingredients.split(",");
        }
        else if (last[7].title === result2) {
            array5 = last[7].ingredients.split(",");

        }
        else if (last[8].title === result2) {
            array5 = last[8].ingredients.split(",");
        }

        document.getElementById("quotation").innerHTML="";
        document.getElementById("quotation1").innerHTML="";
        ul.innerHTML = "";
        array5.forEach((value3) => {
            var li = document.createElement("li");
            li.innerText = value3;
            ul.append(li);

        })


        var array6 = [];
        if (last[0].title === result2) {
            array6 = last[0].steps.split(".");
        }
        else if (last[1].title === result2) {
            array6 = last[1].steps.split(".");
            array6.pop();

        }
        else if (last[2].title === result2) {
            array6 = last[2].steps.split(".");
            array6.pop();
        }
        else if (last[3].title === result2) {
            array6 = last[3].steps.split(".");
            array6.pop();

        }
        else if (last[4].title === result2) {
            array6 = last[4].steps.split(".");
            array6.pop();
        }
        else if (last[5].title === result2) {
            array6 = last[5].steps.split(".");
            array6.pop();

        }
        else if (last[6].title === result2) {
            array6 = last[6].steps.split(".");
            array6.pop();
        }
        else if (last[7].title === result2) {
            array6 = last[7].steps.split(".");
            array6.pop();

        }
        else if (last[8].title === result2) {
            array6 = last[8].steps.split(".");
            array6.pop();
        }
        ol.innerHTML = "";
        array6.forEach((value3) => {
            var li = document.createElement("li");
            li.innerText = value3;
            ol.append(li);


        })



    }
    Recipe2();

}
