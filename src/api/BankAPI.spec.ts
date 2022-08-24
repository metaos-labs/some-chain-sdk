import { APIRequester } from './APIRequester';
import { BankAPI } from './BankAPI';

const c = new APIRequester('https://bombay-lcd.terra.dev/');
const bank = new BankAPI(c);

describe('BankAPI', () => {
  describe('balance', () => {
    it('account exists', async () => {
      await bank.apiAccountBalance('terra1ax7xtll5v6u6vdnymxa4k4648w80zhkggl0u24');
    });

    it('invalid account', async () => {
      await expect(bank.apiAccountBalance('1234')).rejects.toThrow();
    });
  });
});
