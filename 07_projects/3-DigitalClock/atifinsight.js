// Both are same

//const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')



setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleString('en-US',{
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    })
}, 1000)    // 1000 mili second, 1 second