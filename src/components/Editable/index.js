import {Component} from 'react'

import {
  MainContainer,
  SubContainer,
  Heading,
  InputContainer,
  InputField,
  ParagraphText,
  Button,
} from './styledComponents'

class Editable extends Component {
  state = {
    text: '',
    isButtonClicked: false,
  }

  onChangeSearchInput = editedText => {
    this.setState({text: editedText.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {text, isButtonClicked} = this.state
    const EditOrSaveButton = isButtonClicked ? 'Edit' : 'Save'

    return (
      <MainContainer>
        <SubContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isButtonClicked ? (
              <ParagraphText>{text}</ParagraphText>
            ) : (
              <InputField
                type="text"
                value={text}
                onChange={this.onChangeSearchInput}
              />
            )}
            <Button onClick={this.onClickButton}>{EditOrSaveButton}</Button>
          </InputContainer>
        </SubContainer>
      </MainContainer>
    )
  }
}

export default Editable
