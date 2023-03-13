import express from 'express';
import { verifyBuyerToken } from '../auth/buyerAuth';
import { 
    deleteBuyerAccount,
    getBuyerAccount,
    loginBuyer,
    signUpBuyer, 
    updateBuyerAccount
} from '../controllers/buyer';
const router = express.Router();

router.post('/signup', signUpBuyer);
router.post('/login', loginBuyer)
router.put('/update_account', verifyBuyerToken, updateBuyerAccount)
router.get('/get_account', verifyBuyerToken, getBuyerAccount)
router.delete('/delete_account', verifyBuyerToken, deleteBuyerAccount)

export default router;