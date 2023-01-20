// Data object with Team, Event Type, and UTM info
var linkData = {
    team: 'coffee-shop',
    et: 'coffee-cupping',
  }
  
  // Tracking information object
  var tracking = {
    utmSource: 'Google',
    utmMedium: 'cpc',
    utmCampaign: 'fall_campaign',
    utmTerm: 'coffee+shop',
    utmContent: 'logolink',
  }
  
  // Object with Customer info
  var customer = {
    fname: 'Nick',
    lname: 'Smith',
    email: 'test@test.com',
    a1: '',
  }
  
  // Generate Dynamic Path
  var dynamicPath = 'https://calendly.com/' + linkData.team + '/' + linkData.et;
  
  // Call the Calendly Badge Widget
  Calendly.initBadgeWidget({ 
      url: dynamicPath, 
      prefill: {
        name: customer.fname + ' ' + customer.lname,
        email: customer.email,
        customAnswers: {
          a1: customer.a1,
        },
        utm: {
          utmCampaign: tracking.utmCampaign,
          utmSource: tracking.utmSource,
          utmMedium: tracking.utmMedium,
          utmContent: tracking.utmContent,
          utmTerm: tracking.utmTerm,
        },  
      },
      text: 'Hi ' + customer.fname + '! ' + 'Make a Reservation.',
      color: '#000000', 
      textColor: '#ffffff', 
      branding: false
  });