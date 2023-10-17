const toggle = document.querySelector('.show-hide'),
input = document.querySelector('input'),
Indicator = document.querySelector('.indicator'),
IconText = document.querySelector('.icon-text'),
Text = document.querySelector('h6'),
Erroricon = document.querySelector('.error-icon');


toggle.addEventListener('click', () => {
if(input.type === 'password') {
    input.type ='text'
    toggle.classList.replace('bxs-hide', 'bx-show')
} else {
    input.type = 'password'
    toggle.classList.replace('bx-show', 'bxs-hide')
}
})
let alphabeth = /[a-zA-Z]/,
numbers= /[0-9]/,
scharacters = /[!,@,#,$,%,^,&,*,(,),_,-,=,+,\,|,~,?,/,.,;,:]/;

input.addEventListener('keyup', () => {
    Indicator.classList.add('active');
    let val = input.value;
    if (val.match(alphabeth) || val.match(numbers) || val.match(scharacters)) {
     Text.textContent = 'Password is weak';
     IconText.style.color = "red";
     toggle.style.color ="red";
     input.style.borderColor = 'red';
    }

    if (val.match(alphabeth) && val.match(numbers) || val.match(scharacters)) {
        Text.textContent = 'Password is medium';
        IconText.style.color ='orange';
        toggle.style.color ='orange';
        input.style.borderColor = 'orange'
    }
    if (val.match(alphabeth) && val.match(numbers) && val.match(scharacters)) {
        Text.textContent = 'Password is strong';
        toggle.style.color = 'green';
        IconText.style.color = 'green';
        input.style.borderColor = 'green';
        Erroricon.classList.replace('bxs-error-circle', 'bxs-check-circle')

    } else {Erroricon.classList.replace('bxs-check-circle', 'bxs-error-circle')}

    if(val == ''){
        Indicator.classList.remove('active');
        IconText.style.color = "black";
     toggle.style.color ="#a6a6a6";
     input.style.borderColor = 'rgb(34, 176, 237)';
    }
})