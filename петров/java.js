


    // let n =20;
    // let a=1;
    // let b=2,7;
    // let y;
    // let x=1;
    // y = 1/x*Math.sqrt(1-Math.log(x)); 
    // console.log(y);
  


    
    // let n = 20;
    // let a = 1;
    // let b = 2.7;
    // let y;
    // let x = 1;
    // let h= (b-a)/n;

    
    //   y = (1 / x) * Math.sqrt(1 - Math.log(x));
    //   console.log(y);
    // console.log(x);


            
    //     for (let i = 0; i < n; i++) {
    //         x=x+h;

    //         y = (1) /( x * Math.sqrt(1 - Math.log(x)));
    //         console.log(x);

    //         console.log(y);




    //     }
        
        // function mat(n,a,b) {
        //      let y;
        //      let x = 1;
        //      let xz;
        //      let h= (b-a)/n;
        //      let summa=0;


        //     y = (1) /( x * Math.sqrt(1 - Math.log(x)));
        //         console.log("x0",x);
        //         console.log("y0",y);

        //       for (let i = 1; i <= n; i++) {
        //                 x=x+h;
        //                 // summaa=0,85*summa;          
        //                 y = (1) /( x * Math.sqrt(1 - Math.log(x)));
        //                 console.log("x=",i,x);
        //                 console.log("y=",i,y);
        //                 // summa+=y;
        //                 console.log(summa);
        //                 // console.log("summa",summa);
                        
                           
        //                 }
        //                 }
    
        //                 mat(20,1,2.7);



                    
        function mat(n,a,b) {
            let y;
            let x = 1;
            let h= (b-a)/n;
            let summa=0;


           y = (1) /( x * Math.sqrt(1 - Math.log(x)));
               console.log("x0",x);
               console.log("y0",y);

             for (let i = 1; i <= n; i++) {
                       x=x+h;
                       // summaa=0,85*summa;          
                       y = (1) /( x * Math.sqrt(1 - Math.log(x)));
                       console.log("x=",i,x);
                       console.log("y=",i,y);
                       // summa+=y;
                       // console.log("summa",summa);
                       
                          
                       }
                       }
   
                       mat(20,1,2.71828);



        // function f(x) {
        //     // Функция подынтегрального выражения
        //     return 1 / (x * Math.sqrt(1 - Math.log(x)));
        //   }
          
        //   function integrate(a, b, tolerance) {
        //     let n = 10; // Начальное число прямоугольников
        //     let prevApproximation = 0;
        //     let currentApproximation;
          
        //     while (true) {
        //       let deltaX = (b - a) / n;
        //       currentApproximation = 0;
          
        //       for (let i = 1; i <= n; i++) {
        //         let xStar = a + deltaX / 2 + (i - 1) * deltaX;
        //         currentApproximation += f(xStar) * deltaX;
        //       }
          
        //       if (Math.abs(currentApproximation - prevApproximation) < tolerance) {
        //         return { approximation: currentApproximation, n: n };
        //       }
          
        //       prevApproximation = currentApproximation;
        //       n *= 2; // Удваиваем число прямоугольников
        //     }
        //   }
          
        //   let a = 1;
        //   let b = Math.E;
        //   let tolerance = 1e-5;
          
        //   let result = integrate(a, b, tolerance);
          
        //   console.log("Приближенное значение интеграла:", result.approximation);
        //   console.log("Число прямоугольников:", result.n);



                   