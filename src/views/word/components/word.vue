<template>
  <div id="w" ref="txt" class="e" style="line-height: 50px;padding: 20px">
    <!--    <img src="https://developer.mozilla.org/zh-CN/">-->
    那么， 我认为， 生活中，若你好出现了，我们就不得不考虑它出现了的事实。 就我个人来说，你好对我的意义，不能不说非常重大。 我们都知道，只要有意义，那么就必须慎重考虑。 那么， 既然如此， 你好因何而发生？
    要想清楚，你好，到底是一种怎么样的存在。 经过上述讨论， 生活中，若你好出现了，我们就不得不考虑它出现了的事实。 在这种困难的抉择下，本人思来想去，寝食难安。
    亚伯拉罕·林肯曾经提到过，你活了多少岁不算什么，重要的是你是如何度过这些岁月的。我希望诸位也能好好地体会这句话。 笛卡儿说过一句富有哲理的话，读一切好书，就是和许多高尚的人谈话。这句话语虽然很短，但令我浮想联翩。
    海贝尔在不经意间这样说过，人生就是学校。在那里，与其说好的教师是幸福，不如说好的教师是不幸。带着这句话，我们还要更加慎重的审视这个问题：
    这种事实对本人来说意义重大，相信对这个世界也是有一定意义的,所谓你好，关键是你好需要如何写。
    <div id="q"></div>
  </div>
</template>

<script>
export default {
  name: 'Word',
  data () {
    return {
      id: 0,
      highTexts: [],
      txt: {
        id: 1,
        content: '',
        ele: '',
        input: ''
      }
    }
  },
  mounted () {
    this.$refs.txt.addEventListener('mouseup', () => {
      const txt = window.getSelection()
      const range = txt.getRangeAt(0)
      if (range.collapsed) {
        return
      }
      this.id++
      this.txt.content = range.toString()
      this.txt.ele = document.createElement('span')
      this.txt.ele.className = `red${Math.random()}`
      this.txt.ele.style.position = 'relative'
      this.txt.ele.style.background = 'red'
      range.insertNode(this.txt.ele)
      range.surroundContents(this.txt.ele)
      this.creatTips()

      this.txt.input.value = range.toString()
      this.txt.input.addEventListener('input', () => {
        // this.txt.ele.innerText = e.target.value
        this.txt.ele.append(this.txt.input)
        this.txt.input.focus()
      })
    })
  },
  methods: {
    creatTips () {
      this.txt.input = document.createElement('input')
      this.txt.input.className = `input${this.id++}`
      this.txt.input.style.position = 'absolute'
      this.txt.input.style.top = '-30px'
      this.txt.input.style.right = '0'
      this.txt.input.style.zIndex = 999999
      this.txt.input.style.height = '30px'
      this.txt.ele.append(this.txt.input)
      this.txt.input.focus()
      this.highTexts.push(this.txt)
    }
  }

}
</script>

<style scoped>

</style>
