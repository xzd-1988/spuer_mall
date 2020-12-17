<template>
  <div class="wrapper">
    <ul class="content">
    <li>测试滚动1</li>
    <li>测试滚动2</li>
    <li>测试滚动3</li>
    <li>测试滚动4</li>
    <li>测试滚动5</li>
    <li>测试滚动6</li>
    <li>测试滚动7</li>
    <li>测试滚动8</li>
    <li>测试滚动9</li>
    <li>测试滚动10</li>
    <li>测试滚动11</li>
    <li>测试滚动12</li>
    <li>测试滚动13</li>
    <li>测试滚动14</li>
    <li>测试滚动15</li>
    <li>测试滚动16</li>
    <li>测试滚动17</li>
    <li>测试滚动18</li>
    <li>测试滚动19</li>
    <li>测试滚动20</li>
    <li>测试滚动21</li>
    <li>测试滚动22</li>
    <li>测试滚动23</li>
    <li>测试滚动24</li>
    <li>测试滚动25</li>
    <li>测试滚动26</li>
    <li>测试滚动27</li>
    <li>测试滚动28</li>
    <li>测试滚动29</li>
    <li>测试滚动30</li>
    <li>测试滚动31</li>
    <li>测试滚动32</li>
    <li>测试滚动33</li>
    <li>测试滚动34</li>
    <li>测试滚动35</li>
    <li>测试滚动36</li>
    <li>测试滚动37</li>
    <li>测试滚动38</li>
    <li>测试滚动39</li>
    <li>测试滚动40</li>
    <li>测试滚动41</li>
    <li>测试滚动42</li>
    <li>测试滚动43</li>
    <li>测试滚动44</li>
    <li>测试滚动45</li>
    <li>测试滚动46</li>
    <li>测试滚动47</li>
    <li>测试滚动48</li>
    <li>测试滚动49</li>
    <li>测试滚动50</li>
    <li>测试滚动51</li>
    <li>测试滚动52</li>
    <li>测试滚动53</li>
    <li>测试滚动54</li>
    <li>测试滚动55</li>
    <li>测试滚动56</li>
    <li>测试滚动57</li>
    <li>测试滚动58</li>
    <li>测试滚动59</li>
    <li>测试滚动60</li>
    <li>测试滚动61</li>
    <li>测试滚动62</li>
    <li>测试滚动63</li>
    <li>测试滚动64</li>
    <li>测试滚动65</li>
    <li>测试滚动66</li>
    <li>测试滚动67</li>
    <li>测试滚动68</li>
    <li>测试滚动69</li>
    <li>测试滚动70</li>
    <li>测试滚动71</li>
    <li>测试滚动72</li>
    <li>测试滚动73</li>
    <li>测试滚动74</li>
    <li>测试滚动75</li>

  
  </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "classiFication",
  mounted() {
    this.scroll=new BScroll('.wrapper',{
      // probeType:2,
      // pullUpLoad:true
    })
    this.scroll.on('scroll',(position)=>{
    console.log(position);
    })
    // this.scroll.on('pullingUp',()=>{
    //   console.log('上拉加载更多商品');
    // })
  },
  
};
</script>

<style scoped>
.wrapper{
  /* 原生的实现滚动 */
  height: 150px;
  background-color: darkseagreen;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>