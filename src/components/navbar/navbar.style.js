import { makeStyles } from "@mui/styles";
const black = 'rgb(0,0,0)'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        color: 'red'
    },
    listGeneral: {
        textDecoration: 'none',
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        width: '1447px',
        marginLeft: '0.1rem',
        padding: '0',
        marginTop: '1.3rem'
    },
    listGeneralElement: {
        fontFamily: 'DiatypeLight',
        textDecoration: 'none',
        color: black,
        '&:visited': {
            color: black
        },
        fontSize: '0.9rem',
    },
    logo: {
        marginTop: '23px',
        marginLeft: '22px'
    },
    listElement: {
        width: '100%',
        borderTop: 'solid 1px rgb(0,0,0)',
        marginLeft: '11px',
        marginRight: '11px',
        paddingTop: '0.3rem'
    },
    listElementContact: {
        width: '80%',
        borderTop: 'solid 1px rgb(0,0,0)',
        marginLeft: '11px',
        marginRight: '11px',
        paddingTop: '0.3rem'
    },
    listElementLang: {
        width: '20%',
        borderTop: 'solid 1px rgb(0,0,0)',
        marginLeft: '11px',
        marginRight: '11px',
        paddingTop: '0.3rem'
    },
}))
export default useStyles