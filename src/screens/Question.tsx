//import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "src/components"

export default observer(function QuestionScreen() {
  return (
    <Screen style={$root} preset="scroll">
      <Text text="question" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
