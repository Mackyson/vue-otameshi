const App = Vue.createApp(
	{
		data() {
			return {
				message: "Hello",
				count: 0,
				todos:[
					{id: 0,text: "a"},
					{id: 1,text: "b"}
				],
			}
		},
		methods:{
			countup: function(){
				this.count++
			}
		}
	}
)
App.component("todo-list",
	{
		props: ["todo"],
		template: "<li>{{todo.text}}</li>"
	}
)
App.mount("#app")
