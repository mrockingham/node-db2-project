
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        { VIN: 'JTJBM7FX0A5000592', make:'Lexus', model: 'GX 460', mileage: '23000', transmission:'Auto', title_status:'Clean'},
        {VIN: '1C3LC56K57N545672', make:'Chrysler', model: 'Sebring', mileage: '65000', transmission:'Auto', title_status:'Clean'},
        {VIN: 'JH4KA7630PC007649', make:'Acura', model: 'Legend', mileage: '123000', transmission:'Manual', title_status:'Salvage'}
      ]);

    });
};
