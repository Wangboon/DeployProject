"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../src/Utils");
const unit_test = () => __awaiter(void 0, void 0, void 0, function* () {
    //test1
    if (Utils_1.Utils.factorial(0) === 1) {
        console.log(0);
    }
    else {
        console.log('add test1');
        return;
    }
    8;
    //test2
    if (Utils_1.Utils.factorial(5) === 120) {
        console.log(0);
    }
    else {
        console.log('add test2');
        return;
    }
});
unit_test();
