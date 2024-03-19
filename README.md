********* WeathaQuest *********

Myself Sakthivel,
Welcome to my application WeathaQuest.

Contact details:
Phone number: 6382860436
mail: klsakthi333@gmail.com

Motive of WeathaQuest:
Exploring todays weather condition to save ourselves from nature bright sun, rainy clouds and thunder storms :)

Tech Stack:
React,
craeteReactApp,
JavaScript,
HTML,
Redux Toolkit,
JSX,
CSS module.

Resource API:
Tomorrow.io

Why redux:
Redux is the popular state management technology for application, and it is easy to learn and more powerfull state handling tech.

Why Async Thunk Function:
Since we are going to communicate with external API, we should communite uning Async thunk function,
why because redux reducers are pure functions there we should not perfrom any side effects like API calls.
so, we choose to use Async thunk function and it is great function to use.

DATA flow:
<br>
*Submission&Dispatching*
When user Enter's desired location name and press enter or submit button, as we update the setLocation state from input data using onChange event handler, as soon as we submit it the input data basically the location name dispatched using useDispacth function to fetchWeatherReportAsync function.
<br>
*Async function*
The location name consumed in async function here we used fetch keyword to fetch data from an API, as we give the URL that provided by Tomorrow.io and in the URL query in the place of location name we apply the location, so using that URL we are able to fetch the Weather report from Tomorrow.io API.
*Passing the retrived data to store*
With use of ThunkAPI method we are able to dispatch to reducer function, and there in reducer funtion we set and store the value.
<br>
*Selector&Consuming data*
With using of useSelector function we are able to consume the data from store in the DetailPanel component.
And we make use of that data.

APPOLOGIES:(
i haven't touched flutter app actually i did'nt much deal with it.
insdead of making confusions i go with pure react web developement.

ANDDD: learning Flutter is not a rocket science it would take 10 day to get comfortable with flutter or any technologies, it is possible because of my quick learning capability and hard working attitude.

Thanks for using my application.... HAVE A WONDERFULL DAYS AHEAD....:)
