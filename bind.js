(() => {

    let {update: updateAnimal, value: animal} = new Bind(".exampleAnimal", "sand");
    console.log(animal);

    let a = ["fox", "bear", "dog"];
    let index = 0;
    setInterval(() => {
        animal = updateAnimal(a[index]);
        console.log(animal);
        index = (index + 1) % a.length;
    }, 500);
})();

function Bind(domSelector, initValue) {
    
    const ele = document.querySelector(domSelector);

    const update = (value) => {
        ele.innerHTML = value;
        return value;
    };

    if (initValue == undefined) {
        initValue = ele.innerHTML;
    } else {
        update(initValue);
    }

    return {update: update, value: initValue};
}