async function bubble(){
    //console.log('In bubble()');
    const ele = document.querySelectorAll(".oneBar");
    //console.log(ele.lenght);
      for(let i = 0; i < ele.length-1; i++){
        //console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            //console.log('In jth loop');
            ele[j].style.background = '#DC7138';
            ele[j+1].style.background = '#DC7138';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
               // console.log('In if condition');
                await waitforme(delay); 
              //await new Promise(resolve => setTimeout(() => {resolve()}, 260));              
                swap(ele[j], ele[j+1]);          
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
     ele[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubble");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    //disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    //enableNewArrayBtn();
});

