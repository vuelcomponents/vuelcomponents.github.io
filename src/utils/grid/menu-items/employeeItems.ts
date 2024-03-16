export default (functions: any) => {
  return [
    {
      label: 'Actions',
      icon: 'mdi mdi-wrench',
      items: [
        {
          label: functions.t('removeSelected'),
          icon: 'mdi mdi-minus',
          command: functions.deleteSelected
        },
      ]
    },
    {
      label: functions.t('integration'),
      icon: 'mdi mdi-lan-connect',
      command: functions.showIntegrationForm
    }
  ];
};
