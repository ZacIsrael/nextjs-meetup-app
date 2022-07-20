import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props)
{
    return <div>
        <MainNavigation />
        <main className={classes.main}>
            {/* props.children is the content between the closing and opeining Layout tag */}
            {props.children}
        </main>
    </div>

}

export default Layout;