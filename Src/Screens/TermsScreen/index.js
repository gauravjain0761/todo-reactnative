import { ScrollView, Text, View } from "react-native";
import React from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import Colors from "../../Themes/Colors";

export default function TermsScreen() {
  return (
    <View
      style={{
        ...ApplicationStyles.applicationView,
        paddingTop: 20,
        paddingHorizontal: 20,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ color: Colors.black, fontSize: 14 }}>
          {
            "At To Do list app, we are protect your privacy. This Privacy Policy applies to our smartphone mobile app and describes how we collect, use, and share information about you when you use our app.\n\nWhat information do we collect about you?\n\nWe DO NOT collect or store any information, however, third parties may collect data about you or data that you share with them for example when you purchase the app from an app store, or if you share or sync data from this app to another third party location, such as a cloud. Any and all use by third parties in these circumstances is outside of our knowledge and responsibility.\n\nThere are no accounts associated with the purchase or use of the app, for example, you do not have to register your use of this app with our website. You may download the app from an app store, and if you pay money for the app, there may be a third party that collects data related to that transaction, but we do not have access to that data and we do not want it.\n\nWe may share the information we collect about you as follows:\n\nWith third-party service providers who perform services on our behalf, such as selling our app, these service providers are required to use the information we share with them only to perform the services we have contracted with them to provide. With law enforcement or other government officials, as required by law or in response to a valid legal request. In connection with a sale, merger, or acquisition of all or part of our business, in which case the information we have collected about you may be transferred to the new owner. What choices do you have about your information?\n\nYou have the following choices about the information we collect about you:\n\nYou can choose not to provide personal information to us. If you choose not to provide certain information, you may not be able to use certain features of our app.You can update or delete your personal information at any time by accessing your account settings on our app.\n\nYou can choose whether or not to receive promotional emails from us by opting out in the settings of your account on our app.\n\nYou can choose whether or not to share your location information with us by adjusting the settings on your mobile device.\n\nWhat are your rights under data protection laws?\n\nDepending on where you live, you may have certain rights under data protection laws with respect to the information we collect about you. These may include the right to access, rectify, erase, or restrict the processing of your information, or the right to object to our processing of your information. You may also have the right to data portability, which allows you to obtain a copy of your information in a commonly used format, and to transmit it to another controller.\n\nTo exercise any of these rights, please contact us using the information provided below.\n\nHow do we protect your information?\n\nWe take reasonable steps to protect the information we collect about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. We use a combination of technical and organizational measures to protect your information\n\nHere are terms and conditions Terms and Conditions for Smartphone App\n\nBy downloading and using our app, you agree to the following terms and conditions. If you do not agree to these terms and conditions, do not use our app.\n\nLicense\nWe grant you a limited, non-exclusive, non-transferable, revocable license to download and install a copy of our app on a single mobile device and to access and use the app solely for your personal, non-commercial use. You may not copy, modify, distribute, sell, or lease any part of our app, nor may you reverse engineer or attempt to extract the source code of the app, unless laws prohibit these restrictions or you have our written permission.\n\nModification of the App\nWe reserve the right to modify, suspend, or discontinue our app or any of its features at any time, without notice or liability to you. We may also impose limits on certain features or restrict your access to parts or all of the app without notice or liability.\n\nUser Accounts\n\nIn order to access certain features of the app, you may be required to create a user account and provide certain personal information, such as your name, email address, and a password. You are responsible for maintaining the confidentiality of your account and password, and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or password, or any other breach of security.\n\nUser Content\nOur app may allow you to upload, post, or otherwise submit content, including text, photos, and videos (“User Content”). You are solely responsible for your User Content and the consequences of posting or publishing it. By uploading, posting, or otherwise submitting User Content to our app, you represent and warrant that:\n\nYou are the creator and owner of the User Content, or have the necessary rights, licenses, consents, and permissions to use and authorize us to use the User Content as described in these terms; The User Content does not and will not infringe, misappropriate, or violate any third-party rights, including any intellectual property rights or privacy rights;\n\nThe User Content complies with these terms and all applicable laws and regulations.We have the right, but not the obligation, to monitor, review, edit, or remove User Content that we determine in our sole discretion violates these terms or is otherwise inappropriate, illegal, or objectionable. We may also remove User Content that is inactive or stale for an extended period of time.\n\nPrivacy\nWe care about the privacy of our users. By using our app, you agree to our Privacy Policy, which is incorporated into these terms by reference. Our Privacy Policy explains how we collect, use, and share information about you when you use our app.\n\nDisclaimer of Warranties\nOur app is provided on an “as is” and “as available” basis, without any warranties of any kind. We do not guarantee that our app will be uninterrupted, timely, secure, or error-free, or that it will provide any specific results or meet your requirements.\n\nLimitation of Liability\nWe shall not be liable for any damages or losses arising out of or in connection with these terms, including but not limited to direct, indirect, incidental, consequential, punitive, or exemplary damages. This limitation applies to all claims, whether based on warranty, contract, tort, or any other legal theory, and whether or not we have been informed of the possibility of such damages.\n\nGoverning Law\nThese terms and your use of our app shall be applicable laws of the United States of America and it's States where State law is applicable to the use of this app."
          }
        </Text>
      </ScrollView>
    </View>
  );
}
