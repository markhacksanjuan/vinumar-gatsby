import { makeStyles } from "@mui/styles"
const black = 'rgb(0,0,0)'
const wine = '#E7CBCC'

const useStyles = makeStyles(theme => ({
    container: {
        background: wine,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: '70px',
        paddingTop: '60px',
        paddingLeft: '100px',
        paddingRight: '100px',
        marginTop: '150px'
    },
    block: {
        width: '180px',
        marginLeft: '5px',
        marginRight: '5px'
    },
    list: {
        listStyle: 'none',
        paddingLeft: '0',
        fontSize: '0.9rem',
        paddingTop: '0.5rem'
    },
    listContact: {
        listStyle: 'none',
        paddingLeft: '0',
        fontSize: '0.9rem',
        borderBottom: `solid 1px ${black}`,
        paddingBottom: '0.3rem',
        paddingTop: '0.5rem'
    },
    title: {
        fontWeight: 'bold',
        borderTop: `solid 1px ${black}`,
        borderBottom: `solid 1px ${black}`,
        paddingTop: '0.4rem',
        paddingBottom: '0.3rem'
    },
    titleNoBottom: {
        fontWeight: 'bold',
        borderTop: `solid 1px ${black}`,
        paddingTop: '0.4rem',
        paddingBottom: '0.3rem'
    },
    email: {
        marginTop: '0.3rem'
    }
}))
export default useStyles