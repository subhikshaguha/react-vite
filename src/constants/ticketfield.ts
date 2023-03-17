const getHappyFoxActions = () => {

  let fields = {
    stepType: 'create_ticket',
    rawFields: [{
      label: 'contact name',
      key: 'name',
      isTextField: true
    },
    {
      label: 'contact email',
      key: 'email',
      isTextField: true
    },
    {
      label: 'contact phone',
      key: 'phone',
      isTextField: true
    },
    {
      label: 'enter type',
      key: 'type',
      isTextField: true
    }]
  }

  return fields;
}

const getWorkflowActions = () => {

  let fields = {
    stepType: 'update_ticket',
    rawFields: [{
      label: 'ticket id',
      key: 'ticketId',
      isTextField: true
    },
    {
      label: 'ticket email',
      key: 'email',
      isTextField: true
    },
    {
      label: 'enter type',
      key: 'type',
      isCheckBox: true
    }]
  }

  return fields;
}

export { getHappyFoxActions, getWorkflowActions };
