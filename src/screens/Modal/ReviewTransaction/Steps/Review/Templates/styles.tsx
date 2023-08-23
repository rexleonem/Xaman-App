import StyleService from '@services/StyleService';

import { AppSizes, AppFonts } from '@theme';
/* Styles ==================================================================== */
const styles = StyleService.create({
    contentBox: {
        marginBottom: AppSizes.paddingSml,
        paddingHorizontal: 5,
    },
    nfTokenContainer: {
        paddingHorizontal: 0,
    },
    addressContainer: {
        borderRadius: 15,
        zIndex: 2,
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginBottom: AppSizes.paddingSml,
    },
    signersContainer: {
        marginBottom: AppSizes.paddingSml,
    },
    label: {
        fontFamily: AppFonts.subtext.family,
        fontSize: AppFonts.subtext.size,
        fontWeight: 'bold',
        color: '$grey',
        paddingLeft: 5,
        marginBottom: 10,
    },
    destinationAddress: {
        marginTop: 10,
        paddingTop: 10,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '$grey',
    },
    amount: {
        fontFamily: AppFonts.base.familyMonoBold,
        fontWeight: '600',
        fontSize: AppFonts.h5.size,
        color: '$textPrimary',
    },
    amountRed: {
        fontFamily: AppFonts.base.familyMonoBold,
        fontWeight: '600',
        fontSize: AppFonts.h5.size,
        color: '$red',
    },
    value: {
        fontFamily: AppFonts.base.familyMonoBold,
        fontWeight: '600',
        fontSize: AppFonts.base.size,
        color: '$textPrimary',
    },
    valueSubtext: {
        fontFamily: AppFonts.base.familyMonoBold,
        fontWeight: '600',
        fontSize: AppFonts.subtext.size,
        color: '$textPrimary',
    },
    address: {
        fontFamily: AppFonts.base.familyMonoBold,
        fontWeight: '600',
        fontSize: AppFonts.subtext.size,
        color: '$grey',
    },
    logo: {
        width: AppSizes.screen.width * 0.2,
        height: AppSizes.screen.height * 0.1,
        resizeMode: 'contain',
    },
    avatar: {
        alignSelf: 'center',
        width: AppSizes.scale(90),
        height: AppSizes.scale(90),
        borderRadius: 10,
    },
    editButton: {
        backgroundColor: '$tint',
        borderRadius: 8,
        height: 25,
        width: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        marginRight: 15,
    },
    amountInput: {
        fontSize: AppFonts.h3.size,
        fontFamily: AppFonts.base.familyMonoBold,
        fontWeight: '600',
        color: '$blue',
        alignSelf: 'center',
        margin: 0,
        padding: 0,
    },
    alertBox: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '$lightRed',
        borderColor: '$lightRed',
    },
    rateContainer: {
        paddingTop: 15,
    },
    rateText: {
        fontFamily: AppFonts.base.familyMono,
        fontSize: AppFonts.base.size,
        color: '$textSecondary',
    },
    feeText: {
        fontFamily: AppFonts.base.familyMonoBold,
        fontWeight: '600',
        fontSize: AppFonts.base.size,
        color: '$textPrimary',
    },
    objectTemplateContainer: {
        marginBottom: AppSizes.paddingSml,
    },
    objectTemplateChildContainer: {
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    signerEntryRecipientElement: {
        marginBottom: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    signerEntryDetailsContainer: {
        paddingVertical: 10,
        paddingHorizontal: 8,
        marginBottom: 10,
        backgroundColor: '$tint',
        borderWidth: 2,
        borderColor: '$tint',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderTopColor: '$lightGrey',
    },
    hookParamText: {
        backgroundColor: '$tint',
        borderRadius: 10,
        overflow: 'hidden',
    },
});

export default styles;
