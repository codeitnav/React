1. Link : it's just like <a> tag.
difference : in <a> tag, the page refreshes everytime when new value is added.
--> but in react, there's no concept of page refreshments.
--> the values sent are directly injected into the dom.
--> hence, we should never use <a> tag and use Link in react.

--> in Link, we use "to" instead of "href"

2. NavLink provides additional features.
--> for eg. we want that whatever section of pg we are on, that text gets highlighted on the navbar.
--> using callback func in navlink provides the above feature.
--> use backticks `` 
--> isActive links the buttons to the the url and provides the info of the Active section of the web page
--> <NavLink
        to="/"
        className={({isActive}) =>
        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    } > Home
    </NavLink>


3. {Outlet} : 
- In React Router Dom, the <Outlet> component serves as a placeholder for child routes within a parent route. It's essentially a container that dynamically renders the content of the currently active child route.
- Key Points:

--> Nesting Routes: It enables you to create hierarchical route structures, allowing for complex navigation within your application.
--> Dynamic Rendering: The <Outlet> component renders the content of the matched child route, providing flexibility and modularity.
--> Parent-Child Relationship: It defines a clear relationship between parent and child routes, making code organization and maintenance easier.

- Illustration : 
(a) Imagine Your Website as a House

(b) Think of your website as a house. The main entrance is the homepage, and different rooms are like different pages of your website.

(c) The <Outlet> is Like a Doorway

(d) Inside this house, there's a special room called the "Layout" room. This room has walls, a ceiling, and a floor, but it's empty except for one doorway. This doorway is the <Outlet>.

(e) Different Rooms Through the Doorway

(f) When you visit different rooms in your house (like the bedroom, kitchen, or living room), you go through the doorway from the "Layout" room. Similarly, when you click on different links on your website, the content of the different pages (like about us, contact us, products) will appear in the space where the <Outlet> is.

