<template>
  <div class="MyResume">
    <div class="resume-title">
      我的简历
    </div>
    <div class="resume-slogan" v-scroll-reveal.reset="{origin: 'bottom'}">
      <div class="slogan-item" v-for="(item, index) in sloganData" :key="index">
        <div class="inner-wrapper">
          <img class="slogan-img" :src="item.sloganImgUrl" />
          <p class="slogan-title" v-html="item.sloganTitle"></p>
          <p class="slogan-content" v-html="item.sloganContent"></p>
        </div>
      </div>
    </div>
    <div class="resume-main">
      <ul class=resume-list>
        <li class="resume-item" v-scroll-reveal.reset v-for="(item, index) in resumeData" :key="index">
          <div class="work-time">
            <p class="work-month">{{item.workMonth}}</p>
            <p class="work-year">{{item.workYear}}</p>
          </div>
          <div class="work-experience">
            <p class="company">{{item.company}}</p>
            <div class="work-intro">
              <img class="company-img" :src="item.logoUrl"/>
              <p class="job-descrip" v-html="item.jobDescrip"></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyResume',
  data () {
    return {
      sloganData: [
        {
          sloganImgUrl: require('../../assets/img/books.jpg'), // 通过require方法 可以将编译前的文件路径，在打包的时候生成一个正确的打包后的路径
          sloganTitle: '学习&思考',
          sloganContent: '“吾尝终日而思矣，不如须臾之所学也”。<br>只有先学习，才能更深更广地思考。热爱学习、即时学习、终身学习是我坚持的习惯。'
        },
        {
          sloganImgUrl: require('../../assets/img/sunshine.jpg'),
          sloganTitle: '阳光&微笑',
          sloganContent: '做个内心阳光、喜欢微笑的人，享受生活的美好、人生的乐趣，充满正能量，是我一直的追求。'
        },
        {
          sloganImgUrl: require('../../assets/img/mountain.png'),
          sloganTitle: '格局&平静',
          sloganContent: '做个有格局的人，像高山，眼里不只有琐碎，更有一览众山小的胸怀和视野;<br>做个平静的人，像流水，宠辱不惊、不骄不躁、不卑不亢。'
        }
      ],
      resumeData: [
        {
          workMonth: '3月',
          workYear: '2020',
          company: '昭升企业管理有限公司——前端开发工程师',
          logoUrl: require('../../assets/img/zhaosheng.png'),
          jobDescrip: '1、负责公司官网开发，包括轮播、nav导航、过渡动效、页面动态配置等功能。<br>2、负责公司后台管理系统权限登录功能的开发。'
        },
        {
          workMonth: '10月',
          workYear: '2018',
          company: '南京途牛科技有限公司——前端开发工程师',
          logoUrl: require('../../assets/img/tuniu.png'),
          jobDescrip: '1、负责途牛APP首页内容开发，主要包括城市组件开发、轮播、过渡动效等。<br>2、负责运营管理后台系统开发，包括首页图标动态配置、攻略页面的后台评论管理等。'
        },
        {
          workMonth: '7月',
          workYear: '2014',
          company: '南京途牛科技有限公司——产品运营',
          logoUrl: require('../../assets/img/tuniu.png'),
          jobDescrip: '负责途牛出境产品的运营工作，包括系统产品运营、类目运营、活动运营、数据运营。'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .MyResume
    padding: 20px
    .resume-title
      text-align: center
      font-size: 25px
      font-weight: bold
      color: #fff
      margin-bottom: 30px
    .resume-slogan
      display: flex
      justify-content: center
      .slogan-item
        background-color: #fff
        margin: 0 10px
        .inner-wrapper
          width: 190px
          height: 300px
          background-color: #ececec
          margin: 10px
          display: flex
          flex-direction: column
          align-items: center
          .slogan-img
            display: block
            width: 190px
            height: 190px
          .slogan-title
            font-weight: bold
            color: #226039
            text-align: center
            padding: 5px 0
          .slogan-content
            color: #666
            font-size: 13px
            line-height: 16px
            padding: 5px 10px
    .resume-main
      margin-top: 50px
      position: relative
      .resume-list
        &:before
          content: ''
          position: absolute
          top: 0
          bottom: 0
          left: 107px
          width: 5px
          background: #afdcf8
        .resume-item
          display: flex
          margin: 25px 0
          &:hover .work-time
            background: #afdcf8
          .work-time
            text-align: right
            padding-right: 20px
            width: 200px
            border-radius: 20px 0 0 20px
            height: 50px
            transition: 1s
            .work-month
              font-size: 14px
              color: #ffffff
              line-height: 20px
            .work-year
              font-size: 22px
              color: #6cbfee
          .work-experience
            position: relative
            margin-left: 30px
            background: #579dc5
            padding: 20px
            border-radius: 8px
            height: 120px
            width: 1100px
            color: #fff
            &:before
              content: ''
              position: absolute
              top: 20px
              margin-right: 25px
              width: 10px
              height: 10px
              border-radius: 50%
              box-shadow: 0 0 0 3px #afdcf8
              background: #46a4da
              right: 100%
            &:after
              content: ''
              display: inline-block
              position: absolute
              top: 15px
              right: 100%
              border: 10px solid transparent
              border-right-color: #579dc5
            .company
              font-size: 15px
              font-weight: bold
            .work-intro
              margin-top: 15px
              display: flex
              align-items: center
              .company-img
                width: 180px
              .job-descrip
                margin-left: 20px
                line-height: 20px
                font-size: 13px
</style>
