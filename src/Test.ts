import { Utils } from "./Utils";


const unit_test = async () => {
    //test1
    if (Utils.factorial(0) === 1) {
        console.log(0)
    } else {
        console.log('add test1')
        return;
    }
    8
    //test2
    if (Utils.factorial(5) === 120) {
        console.log(0)
    } else {
        console.log('add test2')
        return;
    }

}

unit_test();