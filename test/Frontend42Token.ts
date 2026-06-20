import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.create();

describe("Frontend42Token", function () {
  async function deployToken() {
    const [owner, user1, user2] = await ethers.getSigners();

    const token = await ethers.deployContract(
      "Frontend42Token"
    );

    return {
      token,
      owner,
      user1,
      user2,
    };
  }

  it("Should mint initial supply to owner", async function () {
    const { token, owner } = await deployToken();

    const totalSupply = await token.totalSupply();
    const ownerBalance = await token.balanceOf(owner.address);

    expect(ownerBalance).to.equal(totalSupply);
  });

  it("Should transfer tokens", async function () {
    const { token, owner, user1 } = await deployToken();

    const amount = ethers.parseUnits("100", 18);

    await token.transfer(user1.address, amount);

    expect(
      await token.balanceOf(user1.address)
    ).to.equal(amount);

    expect(
      await token.balanceOf(owner.address)
    ).to.equal(
      (await token.totalSupply()) - amount
    );
  });

  it("Owner should mint tokens", async function () {
    const { token, user1 } = await deployToken();

    const amount = ethers.parseUnits("500", 18);

    await token.mint(user1.address, amount);

    expect(
      await token.balanceOf(user1.address)
    ).to.equal(amount);
  });

  it("Should burn tokens", async function () {
    const { token } = await deployToken();

    const burnAmount = ethers.parseUnits("100", 18);

    const supplyBefore =
      await token.totalSupply();

    await token.burn(burnAmount);

    const supplyAfter =
      await token.totalSupply();

    expect(supplyAfter).to.equal(
      supplyBefore - burnAmount
    );
  });
  it("Non-owner should not mint tokens", async function () {
    const { token, user1, user2 } = await deployToken();
  
    const amount = ethers.parseUnits("500", 18);
  
    await expect(
      token.connect(user1).mint(user2.address, amount)
    ).to.be.rejected;
  });
});