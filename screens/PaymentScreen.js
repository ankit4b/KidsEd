import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Touchable} from 'react-native';
import axios from 'axios';
import {PaymentView} from '../components/PaymentView';

const PaymentScreen = () => {
    
    const [response, setResponse] = useState()

    const [makePayment, setMakePayment] = useState(false)
    const [paymentStatus, setPaymentStatus] = useState('')

    const cartInfo = {
        id: '5eruyt35eggr764762365',
        description: 'T Shirt - With react Native Logo',
        amount: 10
    }
    const onCheckStatus = async (paymentResponse) => {
        setPaymentStatus('Please wait while confirming your payment!')
        setResponse(paymentResponse)

        let jsonResponse = JSON.parse(paymentResponse);
        // perform operation to check payment status

        try {
    
            const stripeResponse = await axios.post('http://localhost:8000/payment', {
                email: 'ankit4b@gmail.com',
                product: cartInfo,
                authToken: jsonResponse
            })

            if(stripeResponse){

                const { paid } = stripeResponse.data;
                if(paid === true){
                    setPaymentStatus('Payment Success')
                }else{
                    setPaymentStatus('Payment failed due to some issue')
                }

            }else{
                setPaymentStatus(' Payment failed due to some issue')
            }

            
        } catch (error) {
            
            console.log(error)
            setPaymentStatus(' Payment failed due to some issue')

        }
 
    }


    const paymentUI = () => {

        if(!makePayment){

            return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
                    <Text style={{ fontSize: 25, margin: 10}}> Make Payment </Text>
                    <Text style={{ fontSize: 16, margin: 10}}> Product Description: {cartInfo.description} </Text>
                    <Text style={{ fontSize: 16, margin: 10}}> Payable Amount: {cartInfo.amount} </Text>

                    <TouchableOpacity style={{ height: 60, width: 300, backgroundColor: '#FF5733', borderRadius: 30, justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={() => {
                            setMakePayment(true)
                        }}
                        >
                        <Text style={{ color: '#FFF', fontSize: 20}}>
                            Proceed To Pay
                        </Text>

                    </TouchableOpacity>


                </View>


             
            // show to make payment
        }else{

            if(response !== undefined){
                return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
                    <Text style={{ fontSize: 25, margin: 10}}> { paymentStatus} </Text>
                    <Text style={{ fontSize: 16, margin: 10}}> { response} </Text>
                </View>

            }else{
                return <PaymentView onCheckStatus={onCheckStatus} product={cartInfo.description} amount={cartInfo.amount} />

            }
            
        }

    }
    return(
        <View style={styles.container}>
            {paymentUI()}
        </View>
    )
}

export default PaymentScreen;

const styles =  StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#fff',
    },
    header:{
        flex: 3,
        backgroundColor:"#123"
    },
    body :{
        flex: 12,
        backgroundColor:"#ddd",
        justifyContent:"center",
        alignItems:"center"
    },
    footer:{
        flex:1,
        backgroundColor:"#789"
    }

})