using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Risk.Dice;
using Risk.Dice.RNG;

namespace Supermarket.API.Controllers
{
    public class WinChance
    {
        public float winProbability { get; set; }
    }

    public class WinChancesQuery
    {
        public int attackingTerritory { get; set; }
        public int defendingTerritory { get; set; }
        public bool trueRandom {get; set; }
    }

    [Route("/winChance")]
    [Produces("application/json")]
    [ApiController]
    public class WinChanceController : ControllerBase
    {
        public WinChanceController()
        {

        }

        /// <summary>
        /// Lists all existing WinChances.
        /// </summary>
        /// <returns>List of WinChances.</returns>
        [HttpGet]
        [ProducesResponseType(typeof(WinChance), 200)]
        public async Task<WinChance> GetWinChance([FromQuery] WinChancesQuery query)
        {
            var res = new WinChance();
            var balanceConfig = query.trueRandom ? null : BalanceConfig.Default;
            var winChanceInfo = WinChanceCache.Get(1000, RoundConfig.Default, balanceConfig);
            winChanceInfo.Calculate();
    
            Console.WriteLine(winChanceInfo.WinChances[7, 4]);
            res.winProbability = winChanceInfo.WinChances[query.attackingTerritory - 1, query.defendingTerritory];

            var battleConfig = new BattleConfig(7, 4, 0);

            // var rngConfig = new RNGConfig(RNGType.MersenneTwister, SeedMode.Auto);

            // var simulator = new BattleSimulator(battleConfig, RoundConfig.Default, null, rngConfig);

            var battle = BattleCache.Get(RoundConfig.Default, battleConfig);
            battle.Calculate();

            var balancedBattle = new BalancedBattleInfo(battle, BalanceConfig.Default);
            balancedBattle.ApplyBalance();

            Console.WriteLine(battle.AttackWinChance);
            Console.WriteLine(balancedBattle.AttackWinChance);

            return res;
        }

        /// <summary>
        /// Lists all existing WinChances.
        /// </summary>
        /// <returns>List of WinChances.</returns>
        [HttpOptions]
        [ProducesResponseType(typeof(WinChance), 200)]
        public async Task<WinChance> OptionsWinChance([FromQuery] WinChancesQuery query)
        {
            var res = new WinChance();
            // Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:3000");
            // Response.Headers.Add("Access-Control-Allow-Credentials", "true");
            return res;
        }
    }
}