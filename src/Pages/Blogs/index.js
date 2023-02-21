import React, { useState, useEffect } from "react";
import Banner from "../../Components/Banner";
import { Container } from "react-bootstrap";
import SearchBar from "../../Components/SearchBar";
import ColBox from "../../Components/ColBox";
import img08 from "../../Images/b1.jpg";
import img09 from "../../Images/b2.jpg";
import img10 from "../../Images/b3.jpg";
import BlogAPIs from "APIs/blogs"

const Blogs = (props) => {
    const [blogs, setBlogs] = useState([])


    const getBlogs = async () => {
        const res = await BlogAPIs.getBlogs();
        if (res) {            
            setBlogs(res.data.data)
        }
    }
    useEffect(() => {       
        getBlogs();
    }, [])

    return (
        <>
            <Banner
                title={"Blogs"}
                description={"Browse exciting articles and blogs that will help you gain insights regarding Openadvisor."}
            />
            <section className={"section"}>
                <Container>
                    <SearchBar placeholder={"Search Article"} />
                    <div className={`colList`}>
                        {blogs.map((data) => (
                            <ColBox
                                blogs
                                data={data}
                            />
                        ))}
                    </div>

                </Container>
            </section>
        </>
    )
}

export default Blogs;