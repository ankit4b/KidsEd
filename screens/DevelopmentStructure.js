import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

const DevelopmentStructure = () => {

    return(
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.text}>
                From the moment we are born until the moment we die, we continue to develop.
                </Text>
                <Text style={styles.text}>
                As discussed at the beginning of this chapter, developmental psychologists often divide our 
                development into three areas: physical development , cognitive development, and psychosocial development. Mirroring Erikson’s stages, lifespan development is divided into different stages that are based on age. 
                We will discuss prenatal, infant, child, adolescent, and adult development.
                </Text>
                
                <View style={{backgroundColor: "#154773", width: '80%', paddingVertical: 6, borderTopRightRadius: 20, borderBottomRightRadius: 5}}>
                    <Text style={{fontSize: 18, fontWeight:"bold", color:"#fff", paddingLeft: 10}}>
                    PRENATAL DEVELOPMENT
                    </Text>
                </View>

                <Text style={styles.text}>
                How did you come to be who you are? From beginning as a one-cell structure to your birth, your prenatal development occurred in an orderly and delicate sequence.
                </Text>
                <Text style={styles.text}>
                There are three stages of prenatal development: germinal, embryonic, and fetal. Let’s take a look at what happens to the developing baby in each of these stages.
                </Text>
                <View style={{backgroundColor: "#154773", width: '80%', marginTop: 10, paddingVertical: 6, borderTopRightRadius: 20, borderBottomRightRadius: 5}}>
                    <Text style={{fontSize: 18, fontWeight:"bold", color:"#fff", paddingLeft: 10}}>
                    Germinal Stage (Weeks 1–2)
                    </Text>
                </View>
                <Text style={styles.text}>
                In the discussion of biopsychology earlier in the book, you learned about genetics and DNA. A mother and father’s DNA is passed on to the child at the moment of conception. Conception occurs when sperm fertilizes an egg and forms a zygote ([link]). A zygote begins as a one-cell structure that is created when a sperm and egg merge. The genetic makeup and sex of the baby are set at this point. During the first week after conception, the zygote divides and multiplies, going from a one-cell structure to two cells, then four cells, then eight cells, and so on. This process of cell division is called mitosis. Mitosis is a fragile process, and fewer than one-half of all zygotes survive beyond the first two weeks (Hall, 2004). After 5 days of mitosis there are 100 cells, and after 9 months there are billions of cells. As the cells divide, they become more specialized, forming different organs and body parts. In the germinal stage, the mass of cells has yet to attach itself to the lining of the mother’s uterus.
                 Once it does, the next stage begins.
                </Text>
                <View style={{backgroundColor: "#154773", width: '80%', marginTop: 10, paddingVertical: 6, borderTopRightRadius: 20, borderBottomRightRadius: 5}}>
                    <Text style={{fontSize: 18, fontWeight:"bold", color:"#fff", paddingLeft: 10}}>
                    Embryonic Stage (Weeks 3–8)
                    </Text>
                </View>
                <Text style={styles.text}>
                After the zygote divides for about 7–10 days and has 150 cells, it travels down the fallopian tubes and implants itself in the lining of the uterus. Upon implantation, this multi-cellular organism is called an embryo. Now blood vessels grow, forming the placenta. The placenta is a structure connected to the uterus that provides nourishment and oxygen from the mother to the developing embryo via the umbilical cord. Basic structures of the embryo start to develop into areas that will become the head, chest, and abdomen. During the embryonic stage, the heart begins to beat and organs form and begin to function. The neural tube forms along the back of the embryo, developing into the spinal cord and brain.
                </Text>
                <View style={{backgroundColor: "#154773", width: '80%', marginTop: 10, paddingVertical: 6, borderTopRightRadius: 20, borderBottomRightRadius: 5}}>
                    <Text style={{fontSize: 18, fontWeight:"bold", color:"#fff", paddingLeft: 10}}>
                    Fetal Stage (Weeks 9–40)
                    </Text>
                </View>
                <Text style={styles.text}>
                When the organism is about nine weeks old, the embryo is called a fetus. At this stage, the fetus is about the size of a kidney bean and begins to take on the recognizable form of a human being as the “tail” begins to disappear.
                </Text>
                <Text style={styles.text}>
                From 9–12 weeks, the sex organs begin to differentiate. At about 16 weeks, the fetus is approximately 4.5 inches long. Fingers and toes are fully developed, and fingerprints are visible. By the time the fetus reaches the sixth month of development (24 weeks), it weighs up to 1.4 pounds. Hearing has developed, so the fetus can respond to sounds. The internal organs, such as the lungs, heart, stomach, and intestines, have formed enough that a fetus born prematurely at this point has a chance to survive outside of the mother’s womb. Throughout the fetal stage the brain continues to grow and develop, nearly doubling in size from weeks 16 to 28. Around 36 weeks, the fetus is almost ready for birth. It weighs about 6 pounds and is about 18.5 inches long, and by week 37 all of the fetus’s organ systems are developed enough that it could survive outside the mother’s uterus without many of the risks associated with premature birth. The fetus continues to gain weight and grow in length until approximately 40 weeks. By then, the fetus has very little room to move around and birth becomes imminent.
                </Text>

            </ScrollView>
        </>
    )
}

export default DevelopmentStructure;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    }, 
    text: {
        textAlign:"justify",
        padding : 20,
        fontSize: 15
    }
})