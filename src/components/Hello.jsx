import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { string, bool, shape } from "prop-types";

function Hello(props) {
  //const children = props.children; 以下と同じ。
  const { children, bang, style } = props;
  return (
    //バッククォート(``)と${}を用いた場合は${children}変数を使用することを意味する。
    // バッククォート使用しない場合：<Text style={styles.text}>Hello {children}</Text>
    <View>
      <Text style={[styles.text, style]}>{`Hello
      ${children}${bang ? "!" : ""}`}</Text>
    </View>
  );
}

// prop-typesで型を定義する。
Hello.propTypes = {
  children: string.isRequired,
  //string型でありhelloを使う時にchildrenを渡すのが必須となる。（isRequired）
  bang: bool,
  style: shape(),
};

Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    backgroundColor: "#0000ff",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});

export default Hello;
