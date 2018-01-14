$(() => {
    let $wrapper = $("#wrapper")
    let $lis = $wrapper.children()
    let $picWidth = $lis.eq(0).width()
    let $index = $('#windowFooter > ul > li')
    clickEvent()
    let index = 0
    let timer = autoPlay()
    hoverAndPageJQ()


    // 工具函数
    function clickEvent(){
        $index.each((indexInner,ele) => {
            $(ele).on('click',(event) => {
                $wrapper.css({'transform':'translateX(-' + indexInner*$picWidth + 'px)'})
                $(event.currentTarget).addClass('active').siblings().removeClass('active')
                index = indexInner
            })
        })
    }

    function autoPlay() {
        return setInterval(() => {
            index++
            if (index >= $lis.length) {
                index = 0
            }
            $index.eq(index).triggerHandler('click')
        }, 2500)
    }
    
    function hoverAndPageJQ() {
        $wrapper.hover(() => {
            clearInterval(timer)
        }, () => {
            timer = autoPlay()
        })
        $(document).on('visibilitychange', () => {
            console.log(document.hidden)
            if (document.hidden) {
                clearInterval(timer)
            } else {
                timer = autoPlay()
            }
        })
    }

})