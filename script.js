function show(idd){
    let flag = 0
    if(document.getElementById(idd).style.display === "block"){
        flag = 1;
    }
    const boxes = document.querySelectorAll('.hidden');

    boxes.forEach(hidden => {
    hidden.style.display="none";
    });

    console.log("applied");
    if(flag == 0){
        document.getElementById(idd).style.display = "block";
    }
    
}
