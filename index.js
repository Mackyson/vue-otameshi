Vue.component("todo-list",
	{
		props: ["todo"],
		template: "<li>{{todo.text}}</li>"
	}
)
Vue.component('line-chart', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 39, 10, 40, 39, 80, 40]
        }
      ]
    },
	{
		responsive: true,
		maintainAspectRatio: false
	})
  }
})
const App = new Vue({
	el: '#app',
	data: {
		message: 'Hello',
		count: 0,
		todos:[
			{id: 0,text: "a"},
			{id: 1,text: "b"},
		]
	},
	methods:{
		countup: function(){
			this.count++
		}
	}
})

