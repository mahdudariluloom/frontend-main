import {Observable, Subject, from, of} from "rxjs";
function observe() {
    // use observable
    // const observer = {
    //     next:(value:any)=> console.log(value),
    //     complete:() => console.log("Completed"),
    //     error:() => console.log("Error checked"),
        
        
    // }

    // const subscriber = (subscribe:any)=>{
    //     subscribe.next(data);
    //     subscribe.complete();
    //     subscribe.error();
    //     subscribe.unsubscribe()
//}
   // return new Observable(subscriber).subscribe(observer);


   // of -> at rxjs
//  return  of(data,data0).subscribe(
//    { next: value => console.log(value),
//     error: err => console.log(err),
//     complete: ()=> console.log("completed")
//     }
//    )

// from -> at rxjs

// return from(data).subscribe({
//     next: value => console.log(value),
//     complete:()=> console.log("comp")
    
// })
// from on promise -> at rxjs
// const promise = new Promise((res,rej)=>{
//     res("resolve")
// })
// // console.log(promise)
// const observablePromise$ = from(promise).subscribe({
//         next: value => console.log(value),
//         complete:()=> console.log("complete")
        
//     })

//     return observablePromise$;
}



export default observe;