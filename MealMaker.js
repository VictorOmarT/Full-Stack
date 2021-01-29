const menu = {
    _course: {
        appetizers: [],
        mains: [],
        desserts:[]
    },
    get appetizers(){

    },
    set appetizers(appetizersIn){

    },
    get mains(){

    },
    set mains(mainsIn){

    },
    get desserts(){

    },
    set desserts(dessertsIn){

    },

    get course(){
        return this.appetizers, this.mains, this.desserts;
    },

    addDishToCourse(courseName,dishName,dishPrice){
        const dish = {
            name: courseName,
            price: dishPrice,
        }
        return this._course[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName){
        const dishes = this._course[courseName];
        const index = Math.floor(Math.random() * dishes.length);
        return dishes[index];
    }
}