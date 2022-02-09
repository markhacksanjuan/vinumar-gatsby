import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
    container: {
    },
    containerHeader: {
        width: '100%',
    },
    headerImg: {
        width: '100%',
        height: '600px',
        objectFit: 'cover',
        marginTop: '266px'
    },
    textTitle: {
        fontSize: '37px',
        color: '#A02E33',
        width: '926px',
        textAlign: 'center',
        margin: 'auto',
        marginTop: '250px',
        marginBottom: '250px'
    },
    card: {
        borderTop: 'solid 1px black',
        width: '47%',
        marginRight: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '442px',
        marginTop: '60px',
        paddingTop: '10px'
    },
    cardImg: {
        height: '300px',
        width: '100%',
        objectFit: 'cover'
    },
    containerProduct: {
        borderTop: 'solid 1px black',
        width: '80%',
        margin: 'auto',
        marginBottom: '300px'
    },
    containerCards: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    containerTextCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerDonde: {
        borderTop: 'solid 1px black',
        width: '80%',
        margin: 'auto',
        marginBottom: '300px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: '18px'
    },
    containerDondeText: {
        display: 'flex',
        flexDirection: 'row'
    },
    cardDonde: {
        width: '61%'
    },
    dondeDirecc: {
        marginRight: '70px'
    },
    h2Donde: {

    },
    dondeImg: {
        width: '100%',
        height: '396px',
        objectFit: 'cover',
        marginTop: '28px'
    },
    titleCard: {

    },
    textCard: {
        width: '65%'
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}))
export default useStyles