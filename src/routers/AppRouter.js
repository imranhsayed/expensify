// Define a component
const ExpenseDashboardPage = () => (
	<div>
		This is from my dashboard component
	</div>
);

const AddExpenseComponent = () => (
	<div>
		This is my expense component
	</div>
);

const EditExpensePage = () => (
	<div>
		This is my edit expense component
	</div>
);

const HelpPage = () => (
	<div>
		This is my HelpPage component
	</div>
);

const Header = () => (
	<header>
		{/*the class "is-active" will only be applied to the link of the page we are currently on.
		 Also setting exact prop value to true will ensure 'is-active' class will only be applied if we are on that url path page.*/}
		<NavLink to="/" activeClassName="is-active" exact={ true }>Dashboard</NavLink>
		<NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
		<NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
		<NavLink to="/help" activeClassName="is-active" >Help</NavLink>
		<h1>Expensify heading</h1>
	</header>
);

const NotFound = () => (
	<div>
		{/* Here Link tag will will provide the link to the path defined her in 'to' */}
		404 <Link to="/">Go home</Link>
	</div>
);

const routes = (
	<BrowserRouter>
		{/*We are wrapping the Route inside a div so that we acn define multiple routes.*/}
		<div>
			{/* This will make the header component show on all pages because we have not defined any route for it*/}
			<Header/>
			{/* Here we are wrapping inside Switch for conditional based routing.
			 Switch traverses through each of the Routes defined below until it finds a match, and once it does it stops*/}
			<Switch>
				{/* Tells react router that whenever it matches the path="/", then render the ExpenseDashboardPage component.
				 exact by default is false , since set to true will ensure the url path exactly matches the value of path here.*/}
				<Route path="/" component={ExpenseDashboardPage} exact={ true }/>
				<Route path="/create" component={AddExpenseComponent} />
				<Route path="/edit" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				{/* If it does not match the urls defined in route path above it will render the NotFound component*/}
				<Route component={NotFound} />
			</Switch>
		</div>
	</BrowserRouter>
);