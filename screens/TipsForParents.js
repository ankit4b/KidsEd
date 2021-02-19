import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

const TipsForParents = () => {

    return(
        <>
            <ScrollView contentContainerStyle={styles.container}>
                
                <View style={{backgroundColor: "#154773", width: '80%', paddingVertical: 6, borderTopRightRadius: 20, borderBottomRightRadius: 5, marginTop: 5}}>
                    <Text style={{fontSize: 18, fontWeight:"bold", color:"#fff", paddingLeft: 10}}>
                        1. Boosting Your Child's Self-Esteem
                    </Text>
                </View>

                <Text style={styles.text}>
                Kids start developing their sense of self as babies when they see themselves through their parents' eyes. Your tone of voice, your body language, and your every expression are absorbed by your kids. Your words and actions as a parent affect their developing self-esteem more than anything else.
                </Text>

                <Text style={styles.text}>
                Praising accomplishments, however small, will make them feel proud; letting kids do things independently will make them feel capable and strong. By contrast, belittling comments or comparing a child unfavorably with another will make kids feel worthless.
                </Text>

                <Text style={styles.text}>
                Avoid making loaded statements or using words as weapons. Comments like "What a stupid thing to do!" or "You act more like a baby than your little brother!" cause damage just as physical blows do.
                </Text>

                <Text style={styles.text}>
                Choose your words carefully and be compassionate. Let your kids know that everyone makes mistakes and that you still love them, even when you don't love their behavior.
                </Text>
                
                <View style={{backgroundColor: "#154773", width: '80%', paddingVertical: 6, borderTopRightRadius: 20, borderBottomRightRadius: 5, marginTop: 5}}>
                    <Text style={{fontSize: 18, fontWeight:"bold", color:"#fff", paddingLeft: 10}}>
                        2. Catch Kids Being Good
                    </Text>
                </View>

                <Text style={styles.text}>
                Have you ever stopped to think about how many times you react negatively to your kids in a given day? You may find yourself criticizing far more often than complimenting. How would you feel about a boss who treated you with that much negative guidance, even if it was well intentioned?
                </Text>

                <Text style={styles.text}>
                The more effective approach is to catch kids doing something right: "You made your bed without being asked — that's terrific!" or "I was watching you play with your sister and you were very patient." These statements will do more to encourage good behavior over the long run than repeated scoldings.
                </Text>

                <Text style={styles.text}>
                Make a point of finding something to praise every day. Be generous with rewards — your love, hugs, and compliments can work wonders and are often reward enough. Soon you will find you are "growing" more of the behavior you would like to see.
                </Text>
                
                <View style={{backgroundColor: "#154773", width: '80%', paddingVertical: 6, borderTopRightRadius: 20, borderBottomRightRadius: 5, marginTop: 5}}>
                    <Text style={{fontSize: 18, fontWeight:"bold", color:"#fff", paddingLeft: 10}}>
                    3. Set Limits and Be Consistent With Your Discipline
                    </Text>
                </View>

                <Text style={styles.text}>
                Discipline is necessary in every household. The goal of discipline is to help kids choose acceptable behaviors and learn self-control. They may test the limits you establish for them, but they need those limits to grow into responsible adults.
                </Text>

                <Text style={styles.text}>
                Establishing house rules helps kids understand your expectations and develop self-control. Some rules might include: no TV until homework is done, and no hitting, name-calling, or hurtful teasing allowed.
                </Text>

                <Text style={styles.text}>
                You might want to have a system in place: one warning, followed by consequences such as a "time out" or loss of privileges. A common mistake parents make is failure to follow through with the consequences. You can't discipline kids for talking back one day and ignore it the next. Being consistent teaches what you expect.
                </Text>
                
                
                
                <View style={{backgroundColor: "#154773", width: '80%', paddingVertical: 6, borderTopRightRadius: 20, borderBottomRightRadius: 5, marginTop: 5}}>
                    <Text style={{fontSize: 18, fontWeight:"bold", color:"#fff", paddingLeft: 10}}>
                        4. Make Time for Your Kids
                    </Text>
                </View>

                <Text style={styles.text}>
                It's often difficult for parents and kids to get together for a family meal, let alone spend quality time together. But there is probably nothing kids would like more. Get up 10 minutes earlier in the morning so you can eat breakfast with your child or leave the dishes in the sink and take a walk after dinner. Kids who aren't getting the attention they want from their parents often act out or misbehave because they're sure to be noticed that way.
                </Text>

                <Text style={styles.text}>
                Adolescents seem to need less undivided attention from their parents than younger kids. Because there are fewer windows of opportunity for parents and teens to get together, parents should do their best to be available when their teen does express a desire to talk or participate in family activities. Attending concerts, games, and other events with your teen communicates caring and lets you get to know more about your child and his or her friends in important ways.
                </Text>

                <Text style={styles.text}>
                You might want to have a system in place: one warning, followed by consequences such as a "time out" or loss of privileges. A common mistake parents make is failure to follow through with the consequences. You can't discipline kids for talking back one day and ignore it the next. Being consistent teaches what you expect.
                </Text>
                
                <Text style={styles.text}>
                Don't feel guilty if you're a working parent. It is the many little things you do — making popcorn, playing cards, window shopping — that kids will remember.
                </Text>
                
                

            </ScrollView>
        </>
    )
}

export default TipsForParents;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    }, 
    text: {
        textAlign:"justify",
        padding : 10,
        fontSize: 15
    }
})