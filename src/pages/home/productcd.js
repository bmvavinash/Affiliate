import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
        paddingTop: 30,
        display: "flex",
        // paddingInline: "1rem",
        // paddingInlineEnd: "1rem",
        // paddingInlineStart: "1rem",
        // paddingBlockStart: "1rem",
        // paddingBlockEnd: "1rem",
        // padding: "1rem" ,
        // paddingLeft: 10,
        // paddingRight:10,
    },
    root1:{
        maxWidth: 375,
        textAlign: "center",
        color: theme.palette.text.secondary,
        // paddingLeft: 10,
        // paddingRight:10,
    },
    media:{
        height:0,
        paddingTop: "56.25%",  // 16:9
        paddingBottom:0,
    }
}));

export default useStyles;