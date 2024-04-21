import React from 'react';
import './About.css';
const About = () => {
    return (
        <div>
            <h3>Welcome to our Inventory management system</h3>
            <p><span className='fw-bold'>Description/instructions about this inventory:</span> This is Gym equipment related inventory management web. You will get many feaure to update and interective on this inventory. Like inventory stock changing(delevery, reStock), manage items, add items,my items etc. In this inventory you will get firebase authentication system. Create account, Login, even google social login included. In header section, If user is not logged in, it will show only two route(Blog, About). Because of almost every route is protected for authentication purpose. If user is logged in then he/she gets all features. In the "Manage" route you can delete your item with final confirmation. In the "Add item" you could add whole item as all required data. But in that case your image will be particular sized(600 x 600) to looks perfect. Which item you will add in the inventory, It will show in the "Myitem" route. And you can also get delete option there. It's only show based on your email. In the "Blog" route there is 4 questions and answer in my aspect.</p>
        </div>
    );
};

export default About;