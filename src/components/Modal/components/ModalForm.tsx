export const ModalForm = () => {
    return (
      <div className="text-gray-700 text-base box-border caret-transparent leading-6 font-apple_system md:text-[14.2222px] md:leading-[21.3333px]">
        <form className="relative text-[15.008px] box-border caret-transparent leading-[22.512px] scroll-mt-14 font-pp_neue_montreal md:text-[14.2222px] md:leading-[15.6444px] md:scroll-mt-[78.2222px]">
          <input
            type="hidden"
            name="CRAFT_CSRF_TOKEN"
            value="g4GVtMeD-kReQoO_1x0NVyegVZSd7fn6G47DMXABpDtWpAM9nnEww8HOzdWkuswKLxHT2JQpYmRTliTdsJSBiFTmpkYzOesCNZxIeMwrevc="
            className="text-[15.008px] bg-transparent box-border caret-transparent hidden leading-[22.512px] p-0 md:text-[14.2222px] md:leading-[15.6444px]"
          />
          <input
            type="hidden"
            name="action"
            value="formie/submissions/submit"
            className="text-[15.008px] bg-transparent box-border caret-transparent hidden leading-[22.512px] p-0 md:text-[14.2222px] md:leading-[15.6444px]"
          />
          <input
            type="hidden"
            name="submitAction"
            value="submit"
            className="text-[15.008px] bg-transparent box-border caret-transparent hidden leading-[22.512px] p-0 md:text-[14.2222px] md:leading-[15.6444px]"
          />
          <input
            type="hidden"
            name="handle"
            value="downloadForm"
            className="text-[15.008px] bg-transparent box-border caret-transparent hidden leading-[22.512px] p-0 md:text-[14.2222px] md:leading-[15.6444px]"
          />
          <input
            type="hidden"
            name="siteId"
            value="1"
            className="text-[15.008px] bg-transparent box-border caret-transparent hidden leading-[22.512px] p-0 md:text-[14.2222px] md:leading-[15.6444px]"
          />
          <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
            <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] scroll-mt-14 md:text-[14.2222px] md:leading-[15.6444px] md:scroll-mt-[78.2222px]">
              <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                <div className="text-[15.008px] box-border caret-transparent gap-x-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] leading-[22.512px] gap-y-6 mb-6 md:text-[14.2222px] md:gap-x-[21.3333px] md:grid-cols-[repeat(auto-fit,minmax(213.333px,1fr))] md:leading-[15.6444px] md:gap-y-[21.3333px] md:mb-[21.3333px]">
                  <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                    <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                      <label className="text-[15.008px] box-border caret-transparent block leading-[22.512px] origin-[0%_50%] mb-2 md:text-[14.2222px] md:leading-[15.6444px] md:mb-[7.11111px]">
                        Full name 
                        <span className="text-red-400 text-[15.008px] box-border caret-transparent hidden leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                          *
                        </span>
                      </label>
                      <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                        <input
                          type="text"
                          name="fields[firstName]"
                          defaultValue=""
                          className="text-stone-950 text-[15.008px] bg-transparent box-border caret-transparent block leading-[22.512px] w-full border-stone-950/20 px-0 py-2 scroll-mt-14 border-t-0 border-x-0 border-b md:text-[14.2222px] md:leading-[15.6444px] md:py-[7.11111px] md:scroll-mt-[78.2222px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[15.008px] box-border caret-transparent gap-x-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] leading-[22.512px] gap-y-6 mb-6 md:text-[14.2222px] md:gap-x-[21.3333px] md:grid-cols-[repeat(auto-fit,minmax(213.333px,1fr))] md:leading-[15.6444px] md:gap-y-[21.3333px] md:mb-[21.3333px]">
                  <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                    <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                      <label className="text-[15.008px] box-border caret-transparent block leading-[22.512px] origin-[0%_50%] mb-2 md:text-[14.2222px] md:leading-[15.6444px] md:mb-[7.11111px]">
                        Email 
                        <span className="text-red-400 text-[15.008px] box-border caret-transparent hidden leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                          *
                        </span>
                      </label>
                      <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                        <input
                          type="email"
                          name="fields[email]"
                          defaultValue=""
                          className="text-stone-950 text-[15.008px] bg-transparent box-border caret-transparent block leading-[22.512px] w-full border-stone-950/20 px-0 py-2 scroll-mt-14 border-t-0 border-x-0 border-b md:text-[14.2222px] md:leading-[15.6444px] md:py-[7.11111px] md:scroll-mt-[78.2222px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[15.008px] box-border caret-transparent gap-x-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] leading-[22.512px] gap-y-6 mb-6 md:text-[14.2222px] md:gap-x-[21.3333px] md:grid-cols-[repeat(auto-fit,minmax(213.333px,1fr))] md:leading-[15.6444px] md:gap-y-[21.3333px] md:mb-[21.3333px]">
                  <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                    <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                      <label className="text-[15.008px] box-border caret-transparent block leading-[22.512px] origin-[0%_50%] mb-2 md:text-[14.2222px] md:leading-[15.6444px] md:mb-[7.11111px]">
                        Phone
                      </label>
                      <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                        <input
                          type="tel"
                          name="fields[phone][number]"
                          className="text-stone-950 text-[15.008px] bg-transparent box-border caret-transparent block leading-[22.512px] w-full border-stone-950/20 px-0 py-2 scroll-mt-14 border-t-0 border-x-0 border-b md:text-[14.2222px] md:leading-[15.6444px] md:py-[7.11111px] md:scroll-mt-[78.2222px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[15.008px] box-border caret-transparent gap-x-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] leading-[22.512px] gap-y-6 mb-6 md:text-[14.2222px] md:gap-x-[21.3333px] md:grid-cols-[repeat(auto-fit,minmax(213.333px,1fr))] md:leading-[15.6444px] md:gap-y-[21.3333px] md:mb-[21.3333px]">
                  <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                    <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                      <label className="text-[15.008px] box-border caret-transparent block leading-[22.512px] origin-[0%_50%] mb-2 md:text-[14.2222px] md:leading-[15.6444px] md:mb-[7.11111px]">
                        Company 
                        <span className="text-red-400 text-[15.008px] box-border caret-transparent hidden leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                          *
                        </span>
                      </label>
                      <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                        <input
                          type="text"
                          name="fields[company]"
                          className="text-stone-950 text-[15.008px] bg-transparent box-border caret-transparent block leading-[22.512px] w-full border-stone-950/20 px-0 py-2 scroll-mt-14 border-t-0 border-x-0 border-b md:text-[14.2222px] md:leading-[15.6444px] md:py-[7.11111px] md:scroll-mt-[78.2222px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[15.008px] box-border caret-transparent gap-x-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] leading-[22.512px] gap-y-6 md:text-[14.2222px] md:gap-x-[21.3333px] md:grid-cols-[repeat(auto-fit,minmax(213.333px,1fr))] md:leading-[15.6444px] md:gap-y-[21.3333px]">
                  <div className="text-[15.008px] box-border caret-transparent hidden leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                    <fieldset className="text-[15.008px] box-border caret-transparent leading-[22.512px] p-0 md:text-[14.2222px] md:leading-[15.6444px]">
                      <legend className="text-[15.008px] box-border caret-transparent leading-[22.512px] mb-2 px-0 md:text-[14.2222px] md:leading-[15.6444px] md:mb-[7.11111px]">
                        Odoo
                      </legend>
                      <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                        <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] border border-gray-300 p-4 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:text-[14.2222px] md:leading-[15.6444px] md:p-[14.2222px] md:rounded-[3.55556px]">
                          <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                            <div className="text-[15.008px] box-border caret-transparent gap-x-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] leading-[22.512px] gap-y-6 mb-6 md:text-[14.2222px] md:gap-x-[21.3333px] md:grid-cols-[repeat(auto-fit,minmax(213.333px,1fr))] md:leading-[15.6444px] md:gap-y-[21.3333px] md:mb-[21.3333px]">
                              <div className="text-[15.008px] box-border caret-transparent hidden leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                  <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                    <input
                                      type="hidden"
                                      name="fields[odoo][odooProjectName]"
                                      value="Test Project"
                                      className="text-[15.008px] bg-transparent box-border caret-transparent hidden leading-[22.512px] p-0 scroll-mt-14 md:text-[14.2222px] md:leading-[15.6444px] md:scroll-mt-[78.2222px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-[15.008px] box-border caret-transparent gap-x-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] leading-[22.512px] gap-y-6 mb-6 md:text-[14.2222px] md:gap-x-[21.3333px] md:grid-cols-[repeat(auto-fit,minmax(213.333px,1fr))] md:leading-[15.6444px] md:gap-y-[21.3333px] md:mb-[21.3333px]">
                              <div className="text-[15.008px] box-border caret-transparent hidden leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                  <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                    <input
                                      type="hidden"
                                      name="fields[odoo][odooName]"
                                      value="Lead subject details"
                                      className="text-[15.008px] bg-transparent box-border caret-transparent hidden leading-[22.512px] p-0 scroll-mt-14 md:text-[14.2222px] md:leading-[15.6444px] md:scroll-mt-[78.2222px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-[15.008px] box-border caret-transparent gap-x-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] leading-[22.512px] gap-y-6 mb-6 md:text-[14.2222px] md:gap-x-[21.3333px] md:grid-cols-[repeat(auto-fit,minmax(213.333px,1fr))] md:leading-[15.6444px] md:gap-y-[21.3333px] md:mb-[21.3333px]">
                              <div className="text-[15.008px] box-border caret-transparent hidden leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                  <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                    <input
                                      type="hidden"
                                      name="fields[odoo][odooPartnerName]"
                                      value="Customer11"
                                      className="text-[15.008px] bg-transparent box-border caret-transparent hidden leading-[22.512px] p-0 scroll-mt-14 md:text-[14.2222px] md:leading-[15.6444px] md:scroll-mt-[78.2222px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-[15.008px] box-border caret-transparent gap-x-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] leading-[22.512px] gap-y-6 mb-6 md:text-[14.2222px] md:gap-x-[21.3333px] md:grid-cols-[repeat(auto-fit,minmax(213.333px,1fr))] md:leading-[15.6444px] md:gap-y-[21.3333px] md:mb-[21.3333px]">
                              <div className="text-[15.008px] box-border caret-transparent hidden leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                  <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                    <input
                                      type="hidden"
                                      name="fields[odoo][odooDescription]"
                                      value="This lead was created from a webhook test."
                                      className="text-[15.008px] bg-transparent box-border caret-transparent hidden leading-[22.512px] p-0 scroll-mt-14 md:text-[14.2222px] md:leading-[15.6444px] md:scroll-mt-[78.2222px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-[15.008px] box-border caret-transparent gap-x-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] leading-[22.512px] gap-y-6 mb-6 md:text-[14.2222px] md:gap-x-[21.3333px] md:grid-cols-[repeat(auto-fit,minmax(213.333px,1fr))] md:leading-[15.6444px] md:gap-y-[21.3333px] md:mb-[21.3333px]">
                              <div className="text-[15.008px] box-border caret-transparent hidden leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                  <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                    <input
                                      type="hidden"
                                      name="fields[odoo][odooSourceId]"
                                      value="18"
                                      className="text-[15.008px] bg-transparent box-border caret-transparent hidden leading-[22.512px] p-0 scroll-mt-14 md:text-[14.2222px] md:leading-[15.6444px] md:scroll-mt-[78.2222px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-[15.008px] box-border caret-transparent gap-x-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] leading-[22.512px] gap-y-6 md:text-[14.2222px] md:gap-x-[21.3333px] md:grid-cols-[repeat(auto-fit,minmax(213.333px,1fr))] md:leading-[15.6444px] md:gap-y-[21.3333px]">
                              <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                  <label className="text-[15.008px] box-border caret-transparent block leading-[22.512px] origin-[0%_50%] mb-2 md:text-[14.2222px] md:leading-[15.6444px] md:mb-[7.11111px]">
                                    Odoo Company Type
                                  </label>
                                  <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                                    <div
                                      role="combobox"
                                      className="relative text-base bg-[url(data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox=%270%200%2014%2014%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20clip-path=%27url%28%23a)] bg-no-repeat bg-size-[14px] box-border caret-transparent leading-[22.512px] overflow-hidden bg-right md:text-[14.2222px] md:bg-size-[12.4444px] md:leading-[15.6444px] after:accent-auto after:border-t-zinc-800 after:box-border after:caret-transparent after:text-gray-700 after:hidden after:text-base after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-[22.512px] after:list-outside after:list-disc after:mt-[-2.496px] after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:border-b-transparent after:border-x-transparent after:border-separate after:border-[5px] after:border-solid after:right-[11.504px] after:top-2/4 after:font-pp_neue_montreal after:md:text-[14.2222px] after:md:leading-[15.6444px] after:md:mt-[-2.21867px] after:md:border-4 after:md:right-[10.2258px]"
                                    >
                                      <div className="relative text-sm box-border caret-transparent inline-block h-full leading-[0px] align-top w-full overflow-hidden rounded-[2.496px] md:text-[12.4444px] md:rounded-[2.21867px]">
                                        <select
                                          name="fields[odoo][odooCompanyType]"
                                          className="text-transparent text-[15.008px] bg-transparent bg-[url(data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox=%270%200%2014%2014%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20clip-path=%27url%28%23a)] bg-no-repeat bg-size-[14px] border-b-zinc-300 border-l-stone-950/20 border-r-stone-950/20 border-t-stone-950/20 hidden leading-[22.512px] max-w-full w-full bg-[position:calc(100%_-_4px)_50%] pl-2.5 pr-8 py-2.5 scroll-mt-14 border-t-0 border-x-0 md:text-[14.2222px] md:bg-size-[12.4444px] md:leading-[15.6444px] md:bg-[position:calc(100%_-_3.55556px)_top] md:pl-[8.88889px] md:pr-[28.4444px] md:py-[8.88889px] md:scroll-mt-[78.2222px] hover:border-l-stone-950 hover:border-r-stone-950 hover:border-t-stone-950"
                                        >
                                          <option
                                            value="person"
                                            className="text-[15.008px] items-center box-border gap-x-[7.504px] leading-[22.512px] min-h-6 min-w-6 gap-y-[7.504px] md:text-[14.2222px] md:gap-x-[7.11111px] md:leading-[15.6444px] md:gap-y-[7.11111px] hover:bg-[lab(0_0_0_/_0)]"
                                          >
                                            Person
                                          </option>
                                        </select>
                                        <div
                                          role="listbox"
                                          className="text-stone-950 text-[15.008px] box-border caret-transparent inline-block leading-[22.512px] list-none w-full border-stone-950/20 py-2 border-b md:text-[14.2222px] md:leading-[15.6444px] md:py-[7.11111px] hover:border-stone-950"
                                        >
                                          <div
                                            role="option"
                                            className="text-base box-border caret-transparent leading-[17.6px] w-full md:text-[14.2222px] md:leading-[15.6444px]"
                                          >
                                            Person
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute text-base bg-white box-border caret-transparent hidden leading-[22.512px] list-none mt-[-1.008px] min-w-60 w-full break-all z-[1] border border-zinc-300 overflow-hidden rounded-b-[2.496px] border-solid top-full md:text-[14.2222px] md:leading-[15.6444px] md:mt-[-0.896px] md:min-w-[213.333px] md:rounded-b-[2.21867px]">
                                        <input
                                          type="search"
                                          aria-label="Odoo Company Type"
                                          placeholder=""
                                          className="text-sm border-b-zinc-300 border-l-gray-300 border-r-gray-300 border-t-gray-300 box-border caret-transparent block leading-[22.512px] max-w-full -outline-offset-2 w-full break-all p-2.5 border-t-0 border-x-0 border-b border-solid md:text-[12.4444px] md:leading-[15.6444px] md:outline-offset-[-1.78125px] md:p-[8.88889px]"
                                        />
                                        <div
                                          role="listbox"
                                          className="relative text-base box-border caret-transparent leading-[22.512px] max-h-[300px] break-all overflow-auto md:text-[14.2222px] md:leading-[15.6444px] md:max-h-[266.667px]"
                                        >
                                          <div
                                            role="option"
                                            className="relative text-sm box-border caret-transparent leading-[15.4px] break-all p-2.5 scroll-mt-14 md:text-[12.4444px] md:leading-[13.6889px] md:p-[8.88889px] md:scroll-mt-[78.2222px]"
                                          >
                                            Person
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="text-[15.008px] box-border caret-transparent gap-x-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] leading-[22.512px] gap-y-6 mb-6 md:text-[14.2222px] md:gap-x-[21.3333px] md:grid-cols-[repeat(auto-fit,minmax(213.333px,1fr))] md:leading-[15.6444px] md:gap-y-[21.3333px] md:mb-[21.3333px]">
                  <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] mt-3 mb-5 md:text-[14.2222px] md:leading-[15.6444px] md:my-0">
                    <fieldset className="text-[15.008px] box-border caret-transparent leading-[22.512px] p-0 md:text-[14.2222px] md:leading-[15.6444px]">
                      <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                        <input
                          type="hidden"
                          name="fields[agree]"
                          value=""
                          className="text-[15.008px] bg-transparent box-border caret-transparent hidden leading-[22.512px] p-0 md:text-[14.2222px] md:leading-[15.6444px]"
                        />
                        <div className="relative text-sm box-border caret-transparent leading-[21px] md:text-[12.4444px] md:leading-[18.6667px]">
                          <label className="relative text-stone-950/60 text-sm box-border caret-transparent inline-block tracking-[0.14px] leading-[19.6px] pl-[30px] md:text-[12.4444px] md:tracking-[0.124444px] md:leading-[17.4222px] md:pl-[26.6667px] before:accent-auto before:items-center before:bg-center before:bg-no-repeat before:bg-size-[50%_50%] before:box-border before:caret-transparent before:text-stone-950/60 before:flex before:text-sm before:not-italic before:normal-nums before:font-normal before:h-4 before:justify-center before:tracking-[0.14px] before:leading-[19.6px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-4 before:border before:border-stone-950/20 before:border-separate before:border-solid before:left-0 before:top-[1.008px] before:font-pp_neue_montreal before:md:text-[12.4444px] before:md:h-[14.2222px] before:md:tracking-[0.124444px] before:md:leading-[17.4222px] before:md:w-[14.2222px] before:md:top-[0.896px]">
                            I agree to the{" "}
                            <a
                              href="https://www.jonite.com/privacy-policy"
                              className="text-stone-950 text-sm box-border caret-transparent tracking-[0.14px] leading-[19.6px] md:text-[12.4444px] md:tracking-[0.124444px] md:leading-[17.4222px]"
                            >
                              Privacy Policy
                            </a>
                            .
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="text-[15.008px] box-border caret-transparent gap-x-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] leading-[22.512px] gap-y-6 md:text-[14.2222px] md:gap-x-[21.3333px] md:grid-cols-[repeat(auto-fit,minmax(213.333px,1fr))] md:leading-[15.6444px] md:gap-y-[21.3333px]">
                  <div className="text-[15.008px] box-border caret-transparent hidden leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                    <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                      <div className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[15.6444px]">
                        <input
                          type="hidden"
                          name="fields[assetFilename]"
                          className="text-[15.008px] bg-transparent box-border caret-transparent hidden leading-[22.512px] p-0 scroll-mt-14 md:text-[14.2222px] md:leading-[15.6444px] md:scroll-mt-[78.2222px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[15.008px] box-border caret-transparent flex justify-start leading-[22.512px] -mx-2 pt-4 md:text-[14.2222px] md:leading-[15.6444px] md:ml-[-7.11111px] md:mr-[-7.11111px] md:pt-[14.2222px]">
                <button
                  type="submit"
                  className="relative text-gray-200 text-sm items-center bg-stone-950 caret-transparent gap-x-2 flex leading-[15.4px] order-10 text-center text-nowrap align-middle border mx-2 pl-3.5 pr-9 py-2.5 rounded-[40px] border-solid border-transparent md:text-[13.3404px] md:gap-x-[7.11111px] md:leading-[14.6745px] md:mx-[7.11111px] md:pl-[14.2222px] md:pr-8 md:pt-[5.33333px] md:pb-[6.22933px] md:rounded-[35.5556px] before:accent-auto before:bg-[url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20fill=%27none%27%20viewBox=%270%200%2016%2017%27%3E%3Cpath%20stroke=%27%23E6E7E8%27%20stroke-linejoin=%27bevel%27%20d=%27m3.819%2013.318%207.778-7.778m0%200H5.233m6.364%200v6.364%27/%3E%3C/svg%3E)] before:bg-center before:bg-no-repeat before:bg-size-[16px] before:box-border before:caret-transparent before:text-gray-200 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-4 before:tracking-[normal] before:leading-[15.4px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:w-4 before:z-[1] before:border-separate before:right-3 before:top-2.5 before:bottom-0 before:font-pp_neue_montreal before:md:bg-size-[14.2222px] before:md:text-[13.3404px] before:md:h-[14.2222px] before:md:leading-[14.6745px] before:md:w-[14.2222px] before:md:right-[10.6667px] before:md:top-[5.33333px] hover:text-white hover:bg-blue-700 hover:border-blue-700"
                >
                  Download now
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };
  