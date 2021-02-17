import React from "react";
import Banner from "../../components/Banner/Banner"
import { PageStyle } from "../shared.styles";
import { ContactLayout, Item, IconStyle, LinkText } from "./Contact.styles";
import { Email, LinkedIn, GitHub } from "../../icons";

function Contact(props) {
function handleLink(link, email = false){
    if(email){
        window.location.href = `mailto:${link}`;
    }else{
        window.open(link)

    }
}

    return (
        <PageStyle ref={props.section}>
            <Banner section={"Contact"} />
            <ContactLayout>
                <Item>
                    <IconStyle>
                        <Email />
                    </IconStyle>
                    <LinkText onClick={()=>handleLink("bregmanhannah@gmail.com", true)}>bregmanhannah@gmail.com</LinkText>
                </Item>
                <Item>
                    <IconStyle>
                        <LinkedIn />
                    </IconStyle>
                    <LinkText onClick={()=>handleLink("https://www.linkedin.com/in/hanabregman/")}>https://www.linkedin.com/in/hanabregman/</LinkText>
                </Item><Item>
                    <IconStyle>
                        <GitHub />
                    </IconStyle>
                    <LinkText onClick={()=>handleLink("https://github.com/bregmanh")}>https://github.com/bregmanh</LinkText>
                </Item>
            </ContactLayout>
        </PageStyle>


    );
}

export default Contact;